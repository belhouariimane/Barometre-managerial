import {Component, OnInit, ViewChild} from '@angular/core';
import {ResultatService} from '../services/resultat.service';
import {MatAccordion} from '@angular/material';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {
  public resultatService;
  public dataSource;
  public data;
  public dataToExport;
  constructor(resultatService: ResultatService) {
    this.resultatService = resultatService;
  }

  ngOnInit() {
    this.resultatService.getData(2)
        .subscribe(dataSource => {
         this.dataSource = dataSource['retour']['statistiquesFiltres'];
         this.dataToExport = dataSource['retour']['dataGlobalCSV'];
        });
  }
  download(data) {
    const blob = new Blob([data], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('statistiquesFiltres', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  export() {
    this.download(this.dataToExport);

  }
  print() {
    window.print();
  }
}
