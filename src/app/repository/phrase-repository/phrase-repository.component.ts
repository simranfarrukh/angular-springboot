import { Component, OnInit } from '@angular/core';
import { Phrase } from 'src/app/model/phrase';
import { EZService } from 'src/app/service/ez-service';

@Component({
  selector: 'app-phrase-repository',
  templateUrl: './phrase-repository.component.html',
  styleUrls: ['./phrase-repository.component.css']
})
export class PhraseRepositoryComponent implements OnInit {

  phrases!: Phrase[];
  phrase!: Phrase;

  deleteMessage = false;
  
  constructor(private service: EZService) { 

  }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.phrases = data;
    });
  }  

  deletePhrase(phraseId: number){
    // this.service.remove(this.phraseId).subscribe(data => this.gotoDeletePhrase(this.phraseId))
    this.service.remove(phraseId).subscribe(data => {
      this.phrase = data;
    });
    this.deleteMessage = true;
  }
}
