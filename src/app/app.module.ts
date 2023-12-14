import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';

import { FooterComponent } from './core/layout/footer/footer.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreativeFormComponent } from './forms/creative-form/creative-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TemplateFormComponent,
    CreativeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
