import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DoneTaskModule} from './pages/done-task/done-task.module';
import {HomeModule} from './pages/home/home.module';
import {AllServicesService} from './services/all-services.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, DoneTaskModule, HomeModule],
    providers: [AllServicesService],
    bootstrap: [AppComponent],
})
export class AppModule {}
