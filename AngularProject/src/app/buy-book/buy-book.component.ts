import { Component, OnInit } from '@angular/core';
import { BuyBook } from '../buy-book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy-book',
  templateUrl: './buy-book.component.html',
  styleUrls: ['./buy-book.component.scss']
})
export class BuyBookComponent implements OnInit {
buybook :BuyBook=new BuyBook();
  constructor( private bookservice:BookService,public router:Router) {  }

  ngOnInit(): void {
  }
  BuyBook(){
  this.bookservice.BuyBook(this.buybook).subscribe({
    next: (res:any)=>{
      localStorage.setItem("pid",res.pid)
      console.log("Book bought successfully" ,res);
      alert("Book saved successfully")
      this.router.navigateByUrl('');
  },
  error: (err:any)=>{
    console.log(err);
   
}
  })
  
  }}

