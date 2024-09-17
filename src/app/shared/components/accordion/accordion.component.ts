import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'co-accordion',
  standalone: true,
  imports: [],
  template: ` 
  <details class="accordion">
    <summary>{{title}}</summary>
    <div class="content">
     <ng-content></ng-content>
    </div>
  </details>`,
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @Input() title = 'Title';
}
