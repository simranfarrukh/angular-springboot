import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  statement: string;

  constructor() {
    this.title = "EZ-Turzumah";
    this.statement = "User contributed and user editable. EZ-Turzumah is multilingual slang repository of untranslatable word aimed at bringing cultures closer one slang a time.";
  }
}
