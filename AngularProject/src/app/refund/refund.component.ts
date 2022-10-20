import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {
bookid=0
emailid=""
  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
  }
  refund()
 {
console.log(this.bookid,this.emailid);
 this.bookservice.refund(this.bookid,this.emailid).subscribe({
 next: (res:any)=>{
console.log("Refund Success" ,res);
 alert("Refund Success");
},
error: (err:any)=>{
console.log(err);
}
})

 }
}
