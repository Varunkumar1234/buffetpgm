import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookbuffetComponent } from './bookbuffet/bookbuffet.component';
import { DeletebuffetComponent } from './deletebuffet/deletebuffet.component';
import { UpdatebuffetComponent } from './updatebuffet/updatebuffet.component';
import { ViewbuffetComponent } from './viewbuffet/viewbuffet.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'bookbuffet', component: BookbuffetComponent },
  { path: 'deletebuffet', component: DeletebuffetComponent },
  { path: 'updatebuffet', component: UpdatebuffetComponent },
  { path: 'viewbuffet', component: ViewbuffetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
