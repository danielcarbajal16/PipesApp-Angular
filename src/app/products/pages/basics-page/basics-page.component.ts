import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: []
})
export class BasicsPageComponent {
  public nameLower: string = 'daniel';
  public nameUpper: string = 'DANIEL';
  public fullName: string = 'dAnIeL CARbajAl';
  public customDate: Date = new Date();
}
