import {Injectable} from '@angular/core';
import {NewProp} from './newProp.model';

@Injectable()
export class MessageService {
  private message = 'Hello Message';
  newProperty: NewProp = {name: 'Hey there'};

  getMessage(): string {
    return this.message;
  };

  setMessage(newMessage: string): void {
    this.message = newMessage;
  };

  getNewProp(): NewProp {
    return this.newProperty
  }

  setNewProp(newProp: string): void {
    this.newProperty.name = newProp;
  }
}
