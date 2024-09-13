import { Component } from "@angular/core";

@Component({
    selector: 'co-dropdown',
    template: `
     <div class="dropdown">
        <ng-content></ng-content>
     </div>
    `,
    styleUrls: ['./dropdown.component.scss']

})
export class DropDownComponent { }