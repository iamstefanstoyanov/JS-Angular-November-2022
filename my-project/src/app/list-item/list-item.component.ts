import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() user!: {
    firstName: string; lastName: string;email: string;
  }
  @Input()showLastName!: boolean;

  @Input()staticString!: string;

  @Input()staticNumber!: Number;

  constructor() { }

  ngOnInit(){
    console.log(this.user)
  }
}
