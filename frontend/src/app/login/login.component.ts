import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Http } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { contentHeaders } from '../common/headers';
import { MdSnackBar } from '@angular/material';



@Component({
    providers: [RouterModule],
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})


export class LoginComponent {
 
    public errorMsg = '';
	
	constructor(public router: Router, public http: Http, public snackBar: MdSnackBar) {
		
	}


    login(event, email, password) {
		event.preventDefault();
		let body = JSON.stringify({ email, password });
		this.http.post('http://localhost:8080/api/token', body, { headers: contentHeaders })
		  .subscribe(
			response => {
			  if(response.json().success){
				localStorage.setItem('jwtoken', response.json().token);
				this.router.navigate(['home']);
			  }else{
				  this.errorMsg = 'Usuário ou senha invalidos! Hum veja se ja fez a carga de dados!!!';
				  this.snackBar.open(this.errorMsg,'',{duration: 1000});				  
			  }
			},
			error => {
			  this.errorMsg = 'Ixi, não era para isto acontecer, verifique se o backend esta no ar!!!';
			  this.snackBar.open(this.errorMsg,'',{duration: 1000});

			}
		  );
    }
}