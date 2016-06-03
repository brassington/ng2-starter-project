import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gadgets',
  template: `
    <div>{{ gadgets }}</div>
  `,
})
export class GadgetsComponent implements OnInit {
  gadgets: string = 'Gadgets';
  
  ngOnInit(){

  }
}
