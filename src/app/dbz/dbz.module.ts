import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.compoents';
import { ListComponent } from './componentes/list/list.component';
import { FormComponent } from './componentes/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    FormComponent,

  ],
  exports:[
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class DbzModule { }
