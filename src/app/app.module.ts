/* modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
/* ngrx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/app.reducer';
import { AppEffects } from './store/app.effects';
/* components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargoDetailsComponent } from './components/cargo-details/cargo-details.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SearchComponent } from './components/upcoming/search/search.component';
import { OrderComponent } from './components/cargo-details/order/order.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { OrderDetailComponent } from './components/upcoming/order-detail/order-detail.component';
import DriverProfileComponent from './components/cargo-details/driver-profile/driver-profile.component';
import { MoreInfoComponent } from './components/cargo-details/more-info/more-info.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CargoDetailsComponent,
    HeaderComponent,
    SearchComponent,
    OrderComponent,
    OrderDetailComponent,
    UpcomingComponent,
    DriverProfileComponent,
    MoreInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(AppEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
