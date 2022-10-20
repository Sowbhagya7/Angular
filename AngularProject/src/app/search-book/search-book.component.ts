import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {
  books!: Book;
 
  category = ''
  authorname = ''
  price=0
  publisher=''
  constructor(private bookService : BookService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  SearchBook()
  {
    console.log(this.category,this.authorname,this.price,this.publisher);
    this.bookService.searchBook(this.category,this.authorname,this.price,this.publisher).subscribe((data: Book) => {
      console.log(data);
     
      this.books = data;
      //this.router.navigate(["/SearchResponse"]);
  });
 
   
  }
}
