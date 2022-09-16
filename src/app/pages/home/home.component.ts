import {Component, Input, OnInit} from '@angular/core';
import {AllServicesService} from '../../services/all-services.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public selectedId: string | null = null;

    public constructor(public service: AllServicesService) {}
}
