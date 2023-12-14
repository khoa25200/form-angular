import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { CreativeFormComponent } from './forms/creative-form/creative-form.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/template-form' },
  { path: 'template-form', component: TemplateFormComponent    },
  { path: 'reactive-form', component: CreativeFormComponent    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
