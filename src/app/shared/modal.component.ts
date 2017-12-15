import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html'
})

export class ModalComponent implements OnInit {
    @Input()
    modalId: string;

    constructor() { }

    ngOnInit() { }
}