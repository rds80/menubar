import { Component } from '@angular/core';
import { routes as navLinks } from '../nav-links';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {

  navLinks = navLinks;

}
