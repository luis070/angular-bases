import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { HeroComponent } from './heroes/hero/hero.component';
import { heroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/components/counter.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    heroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
