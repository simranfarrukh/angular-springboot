import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phrase } from '../model/phrase';


@Injectable()
export class EZService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/phrases'
   }

   public findAll(): Observable<Phrase[]> {
    return this.http.get<Phrase[]>(this.url);
  }

  public save(phrase: Phrase) {
    return this.http.post<Phrase>(this.url, phrase);
  }

  public remove(phraseId: number) {
    return this.http.delete<Phrase>(this.url + "/" + phraseId);
  }

  public modify(phraseId: number, phrase: Phrase) {
    return this.http.put<Phrase>(this.url + "/" + phraseId, phrase);
  }

  public random() {
    return this.http.get<Phrase>(this.url + "/random");
  }
}
