import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class servicedbz  {

  public characters : Character[] = [
    {
      id: uuid(),
       name : 'krilin',
        power: 1000}
        ,
        {
          id:uuid(),
          name:'Goku',
          power: 9500
        },
        {
          id:uuid(),
          name:'vegeta',
          power:10000
        }
      ];

      onNewCharacter (character:Character):void{

        const newCharacter : Character = {id:uuid(),...character}
        this.characters.push(newCharacter);
      }

      onDeletCaracther(index:number):void{
        this.characters.splice(index,1);
      }

      deleteCharacterById(id:string){
        this.characters = this.characters.filter(character => character.id !== id);
      }
}
