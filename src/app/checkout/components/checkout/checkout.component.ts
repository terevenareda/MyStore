import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup , FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
   checkout !:FormGroup;
   submitted=false;
   name: string ='';
   address: string='';
   creditcard : number= 0;

  constructor(private formbuilder :FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.checkout = this.formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
      address: ['',[Validators.required, Validators.minLength(6)]],
      creditcard: ['',[Validators.required, Validators.minLength(16), Validators.pattern("^[0-9]*$")]],

    })
  }
  OnSubmit(){
    if(this.checkout.invalid){
      return alert("Information are invalid");}
    this.router.navigate(['/success']);

  }
  orderevent(event: any){
    console.log("data changed"+ event);
  }

}
