import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsboardComponent }from './newsboard/newsboard.component';

const routes: Routes = [];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'newsboard', component:NewsboardComponent}
    ],{ onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutingModule { }
