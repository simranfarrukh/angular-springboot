import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phrase } from 'src/app/model/phrase';
import { EZService } from 'src/app/service/ez-service';

@Component({
  selector: 'app-add-phrase',
  templateUrl: './add-phrase.component.html',
  styleUrls: ['./add-phrase.component.css']
})
export class AddPhraseComponent {

  phrase!: Phrase;

  constructor(private route: ActivatedRoute, private router: Router, private service: EZService) {
    this.phrase = new Phrase();
   }

   onSubmit(){
     this.service.save(this.phrase).subscribe(result => this.gotoPhrasesRepo());
   }

   gotoPhrasesRepo(){
     this.router.navigate(['/phrases']);
   }
   
}
