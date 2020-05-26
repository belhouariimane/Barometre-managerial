import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

/* Le composant d'alerte transmet les messages d'alerte au modèle chaque fois qu'un message
 * est reçu du service d'alerte. Pour ce faire, il s'abonne à la méthode getMessage() du service d'alerte,
 * qui renvoie un Observable.
 */
export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getAlert()
        .subscribe(message => {
          switch (message && message.type) {
            case 'success':
              message.cssClass = 'alert alert-success';
              break;
            case 'error':
              message.cssClass = 'alert alert-danger';
              break;
          }
          this.message = message;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
