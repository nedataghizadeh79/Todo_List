import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpansionComponent} from './expansion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CardModule} from '../card/card.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [ExpansionComponent],
    imports: [CommonModule, MatExpansionModule, DragDropModule, MatButtonModule, CardModule, MatCardModule],
    exports: [ExpansionComponent],
})
export class ExpansionModule {}
