import {Component, OnInit} from '@angular/core';
import {AllServicesService} from '../../services/all-services.service';

@Component({
    selector: 'app-done-task',
    templateUrl: './done-task.component.html',
    styleUrls: ['./done-task.component.scss'],
})
export class DoneTaskComponent {
    public constructor(public service: AllServicesService) {}

    public filterTasks(): any[] {
        return this.service.allTasks.filter((t) => t.done);
    }
}
