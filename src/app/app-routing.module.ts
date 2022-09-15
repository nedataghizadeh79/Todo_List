import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DoneTaskComponent} from './pages/done-task/done-task.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
    {path: 'done', component: DoneTaskComponent},
    {path: '', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
