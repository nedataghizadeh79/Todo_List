import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoneTaskComponent} from './done-task.component';
import {CardModule} from '../../component/card/card.module';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [DoneTaskComponent],
    imports: [CommonModule, MatButtonModule, RouterModule, CardModule],
})
export class DoneTaskModule {}
