import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
//import { UserService } from './user.service';
//import { TestComponent } from './test/test.component';
export class MyClass{
  constructor(){
    console.log('the new class has been constucted');
  }
}
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    //TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    //UserService,
    //MyClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
