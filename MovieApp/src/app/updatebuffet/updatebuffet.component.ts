import { Component, OnInit } from '@angular/core';
import { BuffetService } from '../buffet.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-updatebuffet',
  templateUrl: './updatebuffet.component.html',
  styleUrls: ['./updatebuffet.component.css']
})
export class UpdatebuffetComponent implements OnInit {

  products: Product[] = [];
  id: number;
  BuffetForm: FormGroup;
  submitted: boolean;
  submitted1: boolean;
  entered: boolean;
  buffets: any = ['South Indian', 'North Indian', 'Continental'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public buffetService: BuffetService
  ) { }

  ngOnInit() {
    this.BuffetForm = this.fb.group({
      buffetname: ['', [Validators.required]],
      emailid: ['', [Validators.required, Validators.email]],
      platecount: ['', [Validators.required, Validators.min(1)]],
      bookdate: ['', [Validators.required]]
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
  submit() {
    this.entered = true;
    this.buffetService.getAll().subscribe((data) => {
      this.products = data;
      if (this.products.filter(({ id }) => String(id) === String(this.id)).length) {
        this.buffetService.update(this.id, this.BuffetForm.value).subscribe(res => {
          console.log('Post Updated Successfully!!');
          this.submitted = true;
        });
      }
      else {
        this.entered = true;
        this.submitted1 = true;
      }
    });
  }

}
