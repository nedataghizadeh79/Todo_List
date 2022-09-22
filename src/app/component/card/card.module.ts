import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [CardComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        DragDropModule,
    ],
    exports: [CardComponent],
})
export class CardModule {}
