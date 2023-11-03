import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Output()
  public NewAction: EventEmitter<number> = new EventEmitter();

  @Output()
  public NewAction2: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : Character[] = [{
    name:'trunk',
    power:10
  }]

  onDeletIndex(index: number):void{

    // debugger;
    console.log(index);

    this.NewAction.emit(index);
  }
  onDeletCharacter(index: number):void{
    console.log(index);
  }

    onDeletId(id?: string):void{
      if(!id) return;
    console.log(id);
    this.NewAction2.emit(id);
  }

}
