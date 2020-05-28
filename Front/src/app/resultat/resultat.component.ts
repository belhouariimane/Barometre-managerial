import {Component, OnInit, ViewChild} from '@angular/core';
import {ResultatService} from '../services/resultat.service';
import {MatAccordion} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionnaireService} from '../services/questionnaire.service';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {
  public dataSource;
  public dataToExportFilter;
  public dataToExportGlobalCSV;
  public dataToExportNonAnonymousCSV;

  public dataSourceGlobal:any;
  constructor(public resultatService: ResultatService,
              private questionnaireService: QuestionnaireService,
              private alertService: AlertService,
              private router: Router,
              private route: ActivatedRoute) {
    this.resultatService = resultatService;
  }

  ngOnInit() {
    this.questionnaireService.getById(this.route.snapshot.params.id)
        .subscribe(questionnaire => {
          if (questionnaire === null) {
            this.alertService.clear();
            this.alertService.error('Le questionnaire demandé n\'existe pas. Retour au menu principal.', true);
            this.router.navigate(['/']);
          }
        });
    this.resultatService.getData(this.route.snapshot.params.id)
        .subscribe(dataSource => {
           this.dataSource = dataSource['retour']['statistiquesFiltres'];
           this.dataToExportFilter = dataSource['retour']['dataFilterCSV'];
           this.dataToExportGlobalCSV = dataSource['retour']['dataGlobalCSV'];
           this.dataToExportNonAnonymousCSV = dataSource['retour']['dataNonAnonymousCSV'];
           this.dataSourceGlobal = dataSource['retour']['statistiquesGlobales'];
        });
  }
  download(data, fileName) {
    const blob = new Blob([data], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', fileName.concat('.csv'));
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  exportFilter() {
    this.download(this.dataToExportFilter, 'filtre');
  }
  exportStatGlobal() {
    this.download(this.dataToExportGlobalCSV, 'globales');
  }
  exportGlobal() {
    this.download(this.dataToExportNonAnonymousCSV, 'nonanonymous');
  }
  print() {
    window.print();
  }
}
