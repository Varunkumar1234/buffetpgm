import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookbuffetComponent } from './bookbuffet/bookbuffet.component';
import { UpdatebuffetComponent } from './updatebuffet/updatebuffet.component';
import { ViewbuffetComponent } from './viewbuffet/viewbuffet.component';
import { DeletebuffetComponent } from './deletebuffet/deletebuffet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookbuffetComponent,
    UpdatebuffetComponent,
    ViewbuffetComponent,
    DeletebuffetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
