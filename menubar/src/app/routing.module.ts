import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path: 'app-forms', component: FormsComponent},
  {path: 'app-reports', component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
