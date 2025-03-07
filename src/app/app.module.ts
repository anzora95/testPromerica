import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneSvFormatPipe } from './pipes/phone-sv-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    PhoneSvFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
