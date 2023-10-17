import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-dialog',
  template: `
    <mat-spinner [diameter]="50"></mat-spinner>
  `,
})
export class LoaderComponent {

}
