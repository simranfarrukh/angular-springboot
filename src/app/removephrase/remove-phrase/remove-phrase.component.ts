import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phrase } from 'src/app/model/phrase';
import { EZService } from 'src/app/service/ez-service';

@Component({
  selector: 'app-remove-phrase',
  templateUrl: './remove-phrase.component.html',
  styleUrls: ['./remove-phrase.component.css']
})
export class RemovePhraseComponent{

  phrase!: Phrase
  phraseId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private service: EZService) {
    this.phrase = this.phrase;
    // this.phraseId = this.phrase.phraseId;
  }

  onSubmit(){
    // this.service.remove(this.phraseId).subscribe(data => this.gotoDeletePhrase(this.phraseId))
    this.service.remove(this.phrase.phraseId).subscribe(data => {
      this.phrase = data;
    });
  }

  gotoDeletePhrase(phraseId: number){
    this.router.navigate(['/phrases/' + phraseId]);
  }

  // deleteStudent(id: number) {  
  //   this.studentservice.deleteStudent(id)  
  //     .subscribe(  
  //       data => {  
  //         console.log(data);  
  //         this.deleteMessage=true;  
  //         this.studentservice.getStudentList().subscribe(data =>{  
  //           this.students =data  
  //           })  
  //       },  
  //       error => console.log(error));  
  // }  
  

}