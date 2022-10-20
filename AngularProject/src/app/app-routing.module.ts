import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetBooksComponent } from './get-books/get-books.component';
import { BuyBook } from './buy-book';
import { BuyBookComponent } from './buy-book/buy-book.component';
import { Authenticate } from './authenticate';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { SearchResponseComponent } from './search-response/search-response.component';
import { RefundComponent } from './refund/refund.component';
import { ReaderHistoryComponent } from './reader-history/reader-history.component';
import { ReaderFormComponent } from './reader-form/reader-form.component';
const routes: Routes = [
{ path: 'User', component:UserComponent},
{ path:'createbook', component: CreateBookComponent},
{ path:'login', component: LoginComponent},
{ path:'register', component: RegisterComponent},
{ path:'', component: WelcomeComponent},
{ path:'getBooks', component: GetBooksComponent},
{ path:'BuyBook', component: BuyBookComponent},
{ path:'Authenticate', component: AuthenticateComponent},
{ path:'SearchBook', component: SearchBookComponent},
{ path:'SearchResponse', component: SearchResponseComponent},
{ path:'Refund', component: RefundComponent},
{ path:'ReaderBooklist', component: ReaderHistoryComponent},
{ path:'Reader', component: ReaderFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
