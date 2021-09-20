import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2uDHLYefnkWWv-Vb2skbAXtkDavChUb0',
      libraries: ['places', 'drawing', 'geometry'],
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
