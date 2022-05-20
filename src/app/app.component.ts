import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Phrase } from './model/phrase';
import { EZService } from './service/ez-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  statement: string;
  phrases!: Phrase[];
  phrase!: Phrase;

  constructor(private router: Router, private service: EZService) {
    this.title = "EZ-Turzumah";
    this.statement = "User contributed and user editable. EZ-Turzumah is multilingual slang repository of untranslatable word aimed at bringing cultures closer one slang a time.";
    this.service.random().subscribe(data => {
      this.phrase = data;
    });
  }
}
