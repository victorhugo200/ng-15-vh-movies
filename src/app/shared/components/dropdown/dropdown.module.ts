import { NgModule } from "@angular/core";
import { DropDownComponent } from "./dropdown.component";
import { DropDownDirective } from "./dropdown.directive";

@NgModule({
    declarations: [DropDownComponent, DropDownDirective],
    exports: [DropDownComponent, DropDownDirective]
})
export class DropDownModule { }