import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components that you want routing for
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about/:id', // example of route parameter
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
