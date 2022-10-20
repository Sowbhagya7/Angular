import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './book';
import { User } from './user';
import { Authenticate } from './authenticate';

const API_URL = 'http://localhost:9090/book/getBooks';
const LoginApi='http://localhost:9090/author/signup';
const Login="http://localhost:9090/author/login";
const Auth='http://localhost:8082/author/authenticate'
@Injectable({
  providedIn: 'root',
})


export class BookService {
  public token: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(public client: HttpClient) {}
  
  getBooks(): Observable<Book[]>{
    return this.client.get<Book[]>(API_URL);
  }
   login(user: User) {
    const header = new HttpHeaders().set('Authorization',  "Bearer "+localStorage.getItem("token"));
return this.client.post(Login, user,{headers: header}
  
  );
  }
   
  register(user :User) :Observable<any>{
    console.log(user,JSON.stringify(user));
    return this.client.post(LoginApi,user);
    
  }
  getAuthors(data:any){
    return this.client.post<User[]>(Login,User);
  }
  BuyBook(data:any){
    return this.client.post("http://localhost:9090/book/reader/books/buy",data);
  }
  createBook(book : Book) : Observable<any>
  {
     
      return this.client.post("http://localhost:9090/book/1/createbooks",book);
  }
  GetToken(data:any) : Observable<any>
  {
     
      return this.client.post(Auth,data);
  }
  searchBook(category: string, authorname: string, price: number, publisher: string):Observable<any> {
    return this.client.get<Book>("http://localhost:9090/book/search",
    {
      params:{
        category:category,
        authorname:authorname,
        price:price,
        publisher:publisher
      },
     
    });
    //throw new Error('Method not implemented.');

}
refund(bookid: number, emailid: string) : Observable<any>
{
 const  url="http://localhost:9090/book/reader/refund/"+emailid+"/"+bookid;
  return this.client.get(url);
   }
   Readerlist(emailid: string) : Observable<any>
   {
    const  url="http://localhost:9090/book/reader/"+emailid+"/books";
     return this.client.get(url);
      }
   
}
