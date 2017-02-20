import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { contentHeaders } from '../common/headers';

 
@Component({
  providers: [RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

 
export class ProductComponent {
  jwt: string;
  response: string;
  api: string;
  public products = [];

  constructor(public router: Router, public http: Http) {
	this.loadProducts('http://localhost:8080/api/products');
  }

  logout() {
    localStorage.removeItem('jwtoken');
    this.router.navigate(['login']);
  }


  loadProducts(url) {
	  this.response = null;
      this.jwt = localStorage.getItem('jwtoken');
	  contentHeaders.set('x-access-token', this.jwt);
      this.http.get(url,{ headers: contentHeaders })
        .subscribe(
			response => {
			  this.response = response.json();
			  if(response.json().success){
				  this.products = response.json().products;
			  }else{
				  this.router.navigate(['login']);
			  }
			  
			},
			error => {
			  //alert(error.text());
			  console.log(error.text());
			  this.router.navigate(['login']);
			}
		  );
	  
    }
}