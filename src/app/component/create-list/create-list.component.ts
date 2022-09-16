import {Component, OnInit} from '@angular/core';
import {AllServicesService} from '../../services/all-services.service';

@Component({
    selector: 'app-create-list',
    templateUrl: './create-list.component.html',
    styleUrls: ['./create-list.component.scss'],
})
export class CreateListComponent {
    public newInput: string = '';

    public constructor(public service: AllServicesService) {}
}
