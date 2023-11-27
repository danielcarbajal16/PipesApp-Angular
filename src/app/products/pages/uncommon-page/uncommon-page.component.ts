import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Daniel';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Jessica';
    this.gender = 'female';
  }

  //i18nPrural
  public clients: string[] = ['Maria', 'Carlos', 'Martín', 'Daniel', 'Ricardo', 'Roberto'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue pipe
  public person = {
    name: 'Daniel',
    age: 24,
    address: 'Guadalajara, México'
  }

  // Async pipe
  public myObservableTimer: Observable<number> = interval(2000);
  public promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
    }, 3000);
  });
}
