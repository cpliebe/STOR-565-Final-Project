import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class CsvService {


  nfldata = "assets/data.csv"

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(this.nfldata, {responseType: 'text'});
  }
}
