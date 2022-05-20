import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phrase } from 'src/app/model/phrase';
import { EZService } from 'src/app/service/ez-service';

@Component({
  selector: 'app-random-phrase',
  templateUrl: './random-phrase.component.html',
  styleUrls: ['./random-phrase.component.css']
})
export class RandomPhraseComponent {

  phrases!: Phrase[];
  phrase!: Phrase;

  constructor(private router: Router, private service: EZService) { }

  ngOnInit() {
    this.service.random().subscribe(data => {
      this.phrase = data;
    });
  } 
}
