import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: `co-search`,
    standalone: true,
    imports: [FormsModule],
    template: `
      <input
      type="text"
      [placeholder]="placeholder"
      [(ngModel)]="value"
    />
    <button (click)="send()" [disabled]="!value">Buscar</button>
    `,
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    @Input() placeholder = 'Buscar por um Filme, Série ou Pessoa...';
    @Output() searched = new EventEmitter<string>();
    protected value = '';

    send() {
        this.searched.emit(this.value);
    }
}