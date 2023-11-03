import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-dbz',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  @Output()
  public onNewCharacter2: EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{

  debugger;
    console.log(this.character);

    if (this.character.name.length ===0 ) return;

      this.onNewCharacter2.emit(this.character);

  }
}
