import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProposalComponent } from './proposal/proposal.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'proposal', component: ProposalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
