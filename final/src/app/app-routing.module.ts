import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProposalComponent } from './proposal/proposal.component';

const routes: Routes = [
  {path: 'STOR-565-Final-Project', component: HomeComponent},
  {path: 'STOR-565-Final-Project/proposal', component: ProposalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }