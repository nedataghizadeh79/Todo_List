import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {FormModule} from '../../component/form/form.module';
import {ExpansionModule} from '../../component/expansion/expansion.module';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {AppModule} from '../../app.module';
import {CreateListModule} from '../../component/create-list/create-list.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        FormModule,
        ExpansionModule,
        RouterModule,
        MatExpansionModule,
        CreateListModule,
    ],
})
export class HomeModule {}
