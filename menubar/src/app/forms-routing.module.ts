import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app/nav-links';

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
      RouterModule
    ]
  })

export class FormsRoutingModule {}
