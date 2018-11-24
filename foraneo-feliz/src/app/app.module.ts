import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { DepartamentComponent } from './components/departament/departament.component';
import { ForumComponent } from './components/forum/forum.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    RestaurantComponent,
    DepartamentComponent,
    ForumComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
