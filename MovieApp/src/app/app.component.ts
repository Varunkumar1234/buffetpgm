import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieApp';
  constructor(private router: Router) { }
  bookbuffet() {
    this.router.navigate(['/bookbuffet']);
  }
  deletebuffet() {
    this.router.navigate(['/deletebuffet']);
  }
  updatebuffet() {
    this.router.navigate(['/updatebuffet']);
  }
  viewbuffet() {
    this.router.navigate(['/viewbuffet']);
  }
}
