import { Component, Inject } from '@angular/core';
import { MyClass } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //counter = 0
  //users = [
  //  { name: 'ivan' },
  //  { name: 'stefan' },
  //  { name: 'john' },
  //]
  constructor(
   // test: MyClass
  ) {
   // console.log(test);
    //setInterval(() =>{
    //  this.counter++
    // },3000)

  }

  //addUserHandler = (nameInput: HTMLInputElement):void => {
  //  const {value: name} = nameInput;
   // this.users = this.users.concat({name})
  //  nameInput.value = ''
  //}
}
