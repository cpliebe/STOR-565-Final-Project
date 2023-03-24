import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nfldata: any[] = [];
  nflheaders: string[] = [];

  constructor(private csvService: CsvService) {}
  
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.csvService.getInfo().subscribe(data => {
      const list = data.split('\n');
      list.forEach(e => {
        this.nfldata.push(e);
      }
)
    })
  }

  getHeaders() {
    for(let i = 0; i < 23; i++)
    {
      this.nflheaders.push(this.nfldata[i])
    }
  }

 
}

