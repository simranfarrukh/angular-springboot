import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phrase } from 'src/app/model/phrase';
import { ModifyPhraseComponent } from 'src/app/modifyphrase/modify-phrase/modify-phrase.component';
import { EZService } from 'src/app/service/ez-service';

@Component({
  selector: 'app-phrase-repository',
  templateUrl: './phrase-repository.component.html',
  styleUrls: ['./phrase-repository.component.css']
})
export class PhraseRepositoryComponent implements OnInit {

  phrases!: Phrase[];
  phrase!: Phrase;

  // deleteMessage = false;
  // updateLink = {path: 'modifyphrases', component: ModifyPhraseComponent};


  constructor(private router: Router, private service: EZService) { 
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
    // this.deleteMessage = true;
    window.location.reload();
  }

  updatePhrase(phraseId: number, phrase: Phrase){
    // this.service.modify(phraseId, phrase).subscribe(result => this.gotoPhrasesRepo(phrase));
    // this.service.remove(this.phraseId).subscribe(data => this.gotoDeletePhrase(this.phraseId))
    this.service.modify(phraseId, this.phrase).subscribe(data => {
      this.phrase = data;
    });
    window.location.reload();
  }

  // updatePhrase(phraseId: number, phrase: Phrase){
  //   this.router.navigate(['/phrases', phraseId]);

  // }

  // gotoPhrasesRepo(phraseId: number){
  //   this.router.navigate(['/phrases' + phraseId]);
  // }


}
