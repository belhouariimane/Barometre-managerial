import { Component, OnInit } from '@angular/core';
import {ResultatService} from '../services/resultat.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {
  public resultatService;
  constructor(resultatService: ResultatService) {
    this.resultatService = resultatService;
  }

  ngOnInit() {
  }
  /*ObjectToCSV(data) {
    const csvRows = [];
    // get the headers
    const  headers = Object.keys((data[0]));
    csvRows.push(headers.join(','));
    for (const row of data) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '//"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
  }*/
  download(data) {
    const blob = new Blob([data], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  getReport() {
    const json = this.resultatService.getData(2);
    console.log(json);
    /* const data = json.map(row => ({
       question : row.question,
       reponse : row.reponse,
       participation : row.participation
     }));
    const csvData = this.ObjectToCSV(json);
    this.download(csvData);*/
  }
}
