
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss'],
  animations:[
    trigger('smoothCollapse', [
      state('initial' ,style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final',style({
        overflow: 'hidden',
      })),
      transition('initial<=>final', animate('250ms'))
    ]),
    trigger('rotatedState', [
      state('default' ,style({
transform: 'rotate(0)'
      })),
      state('rotated' ,style({
        transform: 'rotate(90deg)'
      })),
      transition('default<=>rotated', animate('250ms'))
    ])
  ]
})
export class QuestionItemComponent implements OnInit {

@Input() title: string = 'default'
showBody = false

  constructor() { }

  ngOnInit(): void {
  }
toggleAccordion() {
  this.showBody = !this.showBody;

  console.log(event);
  
}
}