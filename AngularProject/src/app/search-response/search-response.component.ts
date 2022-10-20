import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-search-response',
  templateUrl: './search-response.component.html',
  styleUrls: ['./search-response.component.scss']
})
export class SearchResponseComponent implements OnInit {
  @Input() book!:Book;
  constructor() { }

  ngOnInit(): void {
  }
  

}
