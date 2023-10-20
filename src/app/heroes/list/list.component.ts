import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public name: string ='iron man';
  public edad: number = 45;

  get capitalizaedName():string {
    return this.name.toUpperCase();
  }
  getHeroDescription():string{

    return `${this.name}+ ${this.edad}`;

  }

changehero():void{
this.name = 'spider man';
}

changeage():void{
this.edad= 18;
}

resetForm():void{
  this.name = 'iroman';
  this.edad = 45;

  document.querySelector('h1')!.innerHTML = '<h1>desde angular</h1>'
}

}
