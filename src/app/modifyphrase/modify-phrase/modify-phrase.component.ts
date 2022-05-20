import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Phrase } from 'src/app/model/phrase';
import { EZService } from 'src/app/service/ez-service';

@Component({
  selector: 'app-modify-phrase',
  templateUrl: './modify-phrase.component.html',
  styleUrls: ['./modify-phrase.component.css']
})
export class ModifyPhraseComponent implements OnInit {

  phraseId!: number;
  phrase!: Phrase;

  constructor(private route: ActivatedRoute, private router: Router, private service: EZService) {
   }

  ngOnInit() {
    this.phrase = new Phrase();

    this.phraseId = this.route.snapshot.params['phraseId'];
    
    this.service.modify(this.phraseId, this.phrase)
      .subscribe(data => {
        console.log(data)
        this.phrase = data;
      });
  }

  onSubmit(): void {
    this.service.modify(this.phrase.phraseId, this.phrase).subscribe(data => this.updateForm)
  }

  gotoPhrasesRepo(){
    this.router.navigate(['/phrases']);
  }

  // updateForm(phrase: Phrase){
  //   phrase.phraseId;
  //   phrase.term;
  //   phrase.definition;
  //   phrase.sentenceExample;
  //   phrase.origin;
  // }

  updateForm(id: number){
    this.router.navigate(['/phrases', id]);
  }


  // updatePhrase(phraseId: number, phrase: Phrase){
  //   this.service.modify(phraseId, phrase).subscribe(result => this.gotoPhrasesRepo(phraseId));
  //   // this.service.remove(this.phraseId).subscribe(data => this.gotoDeletePhrase(this.phraseId))
  //   // this.service.modify(phraseId, this.phrase).subscribe(data => {
  //   //   this.phrase = data;
  //   // });
  //   // this.deleteMessage = true;
  //   window.location.reload();
  // }

}
