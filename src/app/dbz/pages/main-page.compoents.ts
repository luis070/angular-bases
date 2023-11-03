import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { servicedbz } from '../servicios/dbz.servce';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {

  constructor(private dbzservce:servicedbz){
  }
  get caracteres():Character[]{
    return[...this.dbzservce.characters]
  }
  onDeletCharacter(id:string):void{
    this.dbzservce.deleteCharacterById(id);
  }

  onNewCharacter(Character:Character){
    this.dbzservce.onNewCharacter(Character);
  }

}
