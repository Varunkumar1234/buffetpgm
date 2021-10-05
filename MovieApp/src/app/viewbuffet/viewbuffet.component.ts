import { Component, OnInit } from '@angular/core';
import { BuffetService } from '../buffet.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-viewbuffet',
  templateUrl: './viewbuffet.component.html',
  styleUrls: ['./viewbuffet.component.css']
})
export class ViewbuffetComponent {

  products: Product[] = [];
  constructor(
    private router: Router,
    public buffetService: BuffetService
  ) { }
  id: number;
  submitted: boolean;
  submitted1: boolean;
  entered: boolean;
  // tslint:disable-next-line: typedef
  viewbuff() {
    this.products = [];
    // tslint:disable-next-line: deprecation
    this.buffetService.getById(this.id).subscribe((data: Product) => {
      this.products.push(data);
      console.log(this.products);
      if (this.products.filter(({ id }) => String(id) === String(this.id)).length) {
        this.submitted = true;
        this.submitted1 = false;
        this.entered = false;
      }
      else {
        this.submitted = false;
        this.submitted1 = true;
        this.entered = true;
      }
    });
  }
}
