import { Directive, ElementRef } from '@angular/core';

declare const $: any; // qs simbolo lo conoscera' a runtime

@Directive({ selector: '[datepicker]' })
export class DatePickerDirective {
    constructor(el: ElementRef) {
        $(el.nativeElement).datepicker({dateFormat: 'yy-mm-dd'});
    }
}
