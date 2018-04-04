import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = "Dev Book Store";
  searchBox: string = '';
}
