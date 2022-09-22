import {Component, Input, OnInit, Output} from '@angular/core';
import {AllServicesService} from '../../services/all-services.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() public taskInfo: any = {};
    @Input() public isInMain: boolean = false;

    public newTitle: string = '';
    public newDescription: string = '';

    public makeFalse() {
        this.isEditing = false;
        this.service.editTask(this.taskInfo._id, {newTitle: this.newTitle, newDescription: this.newDescription});
    }

    public isEditing: boolean = false;

    public constructor(public service: AllServicesService) {}
}
