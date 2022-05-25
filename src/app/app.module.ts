import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhraseRepositoryComponent } from './repository/phrase-repository/phrase-repository.component';
import { AddPhraseComponent } from './addphrase/add-phrase/add-phrase.component';
import { RemovePhraseComponent } from './removephrase/remove-phrase/remove-phrase.component';
import { ModifyPhraseComponent } from './modifyphrase/modify-phrase/modify-phrase.component';
import { RandomPhraseComponent } from './randomphrase/random-phrase/random-phrase.component';
import { EZService } from './service/ez-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AboutComponent } from './about/about/about.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PhraseRepositoryComponent,
    AddPhraseComponent,
    RemovePhraseComponent,
    ModifyPhraseComponent,
    RandomPhraseComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EZService],
  bootstrap: [AppComponent]
})
export class AppModule { }
