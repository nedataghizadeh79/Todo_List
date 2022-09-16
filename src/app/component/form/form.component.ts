import {Component, Input, OnInit} from '@angular/core';
import {AllServicesService} from '../../services/all-services.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent {
    public constructor(public allServicesService: AllServicesService) {}

    public obj: any = {
        title: '',
        description: '',
    };

    @Input() public wantedId: string | null = null;

    public handleSubmitButton(): void {
        this.allServicesService.createNewTask(this.obj, this.wantedId);
        this.obj.title = '';
        this.obj.description = '';
    }
}
