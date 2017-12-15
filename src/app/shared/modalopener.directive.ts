import { Directive, ElementRef, Renderer, Input } from '@angular/core';

declare const $: any;

@Directive({ selector: '[modalOpener]' })
export class ModalOpenerDirective {
@Input()
modalOpener: string;

    constructor(el: ElementRef, renderer: Renderer) { 
        $(el.nativeElement).click(()=>{
            $('#' + this.modalOpener).modal();
        });
    }
}