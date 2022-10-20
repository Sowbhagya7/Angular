import { Component, Input, OnInit } from '@angular/core';
import { BuyBook } from '../buy-book';

@Component({
  selector: 'app-reader-form',
  templateUrl: './reader-form.component.html',
  styleUrls: ['./reader-form.component.scss']
})
export class ReaderFormComponent implements OnInit {
  @Input() buybooks!:BuyBook;
  constructor() { }

  ngOnInit(): void {
  }

}
