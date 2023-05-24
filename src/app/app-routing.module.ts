import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { CargoDetailsComponent } from './components/cargo-details/cargo-details.component';

const routes: Routes = [
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'cargo-details/:id', component: CargoDetailsComponent },
  { path: '', redirectTo: 'upcoming', pathMatch: 'full' },
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
