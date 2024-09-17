import { Component } from '@angular/core';
import { AccordionComponent } from 'src/app/shared/components/accordion/accordion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
