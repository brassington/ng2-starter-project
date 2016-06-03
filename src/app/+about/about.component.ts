import {Component, OnInit} from '@angular/core';
import {MessageService} from '../shared';
import {NewProp} from '../shared/newProp.model';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = 'About Page';
  body: string = 'This is the about page body';
  message: string;
  additional: string = 'This is the additional message';
  newProp: NewProp;

  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
    this.message = this.messageService.getMessage();
    this.newProp = this.messageService.getNewProp();
  }

  updateMessage(m: string): void {
    this.messageService.setMessage(m);
  }
}
