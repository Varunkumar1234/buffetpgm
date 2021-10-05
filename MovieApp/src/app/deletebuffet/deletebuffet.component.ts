import { Component, OnInit } from '@angular/core';
import { BuffetService } from '../buffet.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-deletebuffet',
  templateUrl: './deletebuffet.component.html',
  styleUrls: ['./deletebuffet.component.css']
})
export class DeletebuffetComponent {

  products: Product[] = [];
  constructor(
    private router: Router,
    public buffetService: BuffetService
  ) { }
  id: number;
  submitted: boolean;
  entered: boolean;
  submitted1: boolean;
  deletebuff() {
    this.entered = true;
    this.buffetService.delete(this.id).subscribe(res => {
      this.products = this.products.filter(item => item.id !== this.id);
      this.submitted = true;
    });
  }

}
