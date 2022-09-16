import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {CreateListComponent} from './create-list.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [CreateListComponent],
    imports: [CommonModule, MatButtonModule, MatInputModule, FormsModule, MatFormFieldModule, RouterModule],
    exports: [CreateListComponent],
})
export class CreateListModule {}
