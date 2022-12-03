import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class TestComponent implements OnInit {
  @Input() users!:{name: string}[];
  constructor(

  ){
    
  }
  ngOnInit(): void {

  }

}
