import { Component } from '@angular/core';
let myNumber = 0
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  users = [
    {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@example.com'
    },
    {
      firstName: 'Stefan',
      lastName: 'Stoyanov',
      email: 'stoyanov@example.com'
    },
    {
      firstName: 'Stasi',
      lastName: 'Stoyanova',
      email: 'stasi@example.com'
    }
  ]
  myNumber = myNumber
  showLastName = true;
  handleClickEvent(event: MouseEvent){
    this.showLastName = !this.showLastName;
  }
  incremetOne(event: MouseEvent){
    this.myNumber++
  }
  constructor(){}
}
