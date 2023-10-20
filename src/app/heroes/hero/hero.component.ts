import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public heroname: string[] = ['spiderman', 'iroman','hulk','blackpanter','thor'];
  public deleteHero ?:string;
  removeLastHero ():void {
    const deleteHero = this.heroname.pop();
    console.log({deleteHero});
    this.deleteHero = deleteHero;

  }

}
