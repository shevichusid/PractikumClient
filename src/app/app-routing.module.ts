import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFillingComponent } from './form-filling/form-filling.component';
import { InformationFormComponent } from './information-form/information-form.component';

const routes: Routes = [
  { path: "formFilling", component: FormFillingComponent },
  { path: "informationForm", component: InformationFormComponent },
  { path: "", redirectTo: "formFilling", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
