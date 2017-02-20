import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
	ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	MaterialModule,
	RouterModule,
	AppRoutingModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
