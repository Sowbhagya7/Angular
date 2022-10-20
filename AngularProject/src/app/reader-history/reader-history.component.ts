import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BuyBook } from '../buy-book';

@Component({
  selector: 'app-reader-history',
  templateUrl: './reader-history.component.html',
  styleUrls: ['./reader-history.component.scss']
})
export class ReaderHistoryComponent implements OnInit {
  emailid=""
  books!: BuyBook;
  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
  }
  ReaderHistory()
  {
 console.log(this.emailid);
  this.bookservice.Readerlist(this.emailid).subscribe({
  next: (res:any)=>{
 console.log(" Success" ,res);
 this.books=res;
  alert("Success");
 },
 error: (err:any)=>{
 console.log(err);
 }
 })
 
  }
}
