import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsencesComponent } from './absences/absences.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'settings', pathMatch: 'full'},
  {path: 'settings', component: SettingsComponent},
  {path:'users', component: UsersComponent},
  {path: 'absences', component: AbsencesComponent},
  {path: '**', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
