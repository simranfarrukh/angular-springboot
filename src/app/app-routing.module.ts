import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhraseComponent } from './addphrase/add-phrase/add-phrase.component';
import { ModifyPhraseComponent } from './modifyphrase/modify-phrase/modify-phrase.component';
// import { RandomPhraseComponent } from './randomphrase/random-phrase/random-phrase.component';
import { RemovePhraseComponent } from './removephrase/remove-phrase/remove-phrase.component';
import { PhraseRepositoryComponent } from './repository/phrase-repository/phrase-repository.component';

const routes: Routes = [
  {path: 'phrases', component: PhraseRepositoryComponent},
  {path: 'addphrases', component: AddPhraseComponent},
  {path: 'modifyphrases', component: ModifyPhraseComponent},
  {path: 'removephrases', component: RemovePhraseComponent},
  // {path: 'randomphrase', component: RandomPhraseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
