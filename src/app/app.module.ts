import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { HttpClientModule } from "@angular/common/http";
 import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilterStatePipe } from './shared/filter-state.pipe';
import { BreweryListComponent } from './brewery/brewery-list/brewery-list.component';
import { LoadingIndicatorComponent } from './shared/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterStatePipe,
    BreweryListComponent,
    LoadingIndicatorComponent
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
