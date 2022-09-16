import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-expansion',
    templateUrl: './expansion.component.html',
    styleUrls: ['./expansion.component.scss'],
})
export class ExpansionComponent {
    public panelOpenState: boolean = false;

    @Output() public addTask = new EventEmitter<string>();

    @Input() public task: any[] = [];

    @Input() public subjects: any = {};

    public filterList(): any[] {
        return this.task.filter((t) => t.list == this.subjects._id);
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.task, event.previousIndex, event.currentIndex);
    }
}
