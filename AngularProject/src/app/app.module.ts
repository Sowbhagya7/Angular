import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetBooksComponent } from './get-books/get-books.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { BuyBookComponent } from './buy-book/buy-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { SearchResponseComponent } from './search-response/search-response.component';
import { RefundComponent } from './refund/refund.component';
import { ReaderHistoryComponent } from './reader-history/reader-history.component';
import { ReaderFormComponent } from './reader-form/reader-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WelcomeComponent,
    CreateBookComponent,
    LoginComponent,
    RegisterComponent,
    GetBooksComponent,
    AuthenticateComponent,
    BuyBookComponent,
    SearchBookComponent,
    SearchResponseComponent,
    RefundComponent,
    ReaderHistoryComponent,
    ReaderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
