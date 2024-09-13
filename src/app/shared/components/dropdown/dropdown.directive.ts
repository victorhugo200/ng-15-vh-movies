import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    protected element!: HTMLElement;

    constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2){}

    @HostListener('mouseenter')
    onMouseEnter() {
       this.element = this.elementRef.nativeElement.querySelector('co-dropdown') as HTMLElement;
       this.renderer.addClass(this.element, 'active');
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        if (this.element) this.renderer.removeClass(this.element, 'active');
    }
}