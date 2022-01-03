import { Component, OnInit } from '@angular/core';
import { BuffetService } from '../buffet.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-bookbuffet',
  templateUrl: './bookbuffet.component.html',
  styleUrls: ['./bookbuffet.component.css']
})
export class BookbuffetComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public buffetService: BuffetService
  ) { }

  products: Product[] = [];
  BuffetForm: FormGroup;
  submitted: boolean;
  submitted1: boolean;
  entered: boolean;
  done: boolean;
  buffets: any = ['South Indian', 'North Indian', 'Continental'];
  bookdate2: string;
  x: number;
  currentDate = new Date();
  submitted2: boolean;
  buffetname1: string;
  email: string;
  platecount: number;
  bookdate: number;
  id1: number;
  successmessage: string = '';
  errormessage: string = '';
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.BuffetForm = this.fb.group({
      buffetname: ['', [Validators.required]],
      emailid: ['', [Validators.required, Validators.email]],
      platecount: ['', [Validators.required, Validators.min(1)]],
      bookdate: ['', [Validators.required]],
    });

  }
  changebuffet(e) {
    console.log(e);
    this.buffetname.setValue(e.target.value, {
      onlySelf: true
    });
  }

  get buffetname() {
    return this.BuffetForm.get('buffetname');
  }
  
  
  bookbuffet(){
    this.id1 = 1000;
    console.log(this.BuffetForm.value);
  }

  submit(bookdate1, email1, platecount1) {
    this.bookdate2 = bookdate1;
    this.email = email1;
    this.platecount = platecount1;
    this.id1 = 1000;
    console.log(this.bookdate2);
    if (String(this.bookdate2) < String(this.currentDate)) {
      this.buffetService.getAll().subscribe((data) => {
        this.products = data;
        if (this.products.filter(({ bookdate }) => String(bookdate) === String(this.bookdate2)).length) {
          this.submitted1 = true;
          this.submitted = false;
          this.submitted2 = false;
        }
        else {
          this.x = Number(this.products.slice(-1)[0].id);

          this.buffetService.create(this.BuffetForm.value).subscribe(res => {
            console.log('Product created!');
            console.log(this.BuffetForm.value);
            this.x = this.x + 1;
            this.submitted = true;
            this.submitted1 = false;
            this.submitted2 = false;
            this.successmessage = 'message';
          });
        }
      });
    }
    else {
      this.submitted = false;
      this.submitted1 = false;
      this.submitted2 = true;
    }
  }
}
