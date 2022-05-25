import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phrase } from 'src/app/model/phrase';
import { EZService } from 'src/app/service/ez-service';

@Component({
  selector: 'app-modify-phrase',
  templateUrl: './modify-phrase.component.html',
  styleUrls: ['./modify-phrase.component.css']
})
export class ModifyPhraseComponent implements OnInit {

  // phraseId!: number;
  phrase!: Phrase;

  constructor(private route: ActivatedRoute, private router: Router, private service: EZService ) { }

  ngOnInit(): void {
    this.phrase.phraseId = this.route.snapshot.params['phraseId'];

    this.service.modify(this.phrase.phraseId, this.phrase).subscribe(data => {
      console.log(data)
      this.phrase = data;
    });
  }

  onSubmit(): void{
    this.service.modify(this.phrase.phraseId, this.phrase).subscribe(data => this.updateForm);
  }

  updateForm(id: number){
    this.router.navigate(['/phrases', id]);
  }
}
