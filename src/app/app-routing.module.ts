import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeupComponent } from './makeup/makeup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'makeup',component:MakeupComponent},
  {path:'register',component:RegisterComponent},
  {path:'post',component:PostComponent},
  {path:'',redirectTo:'makeup',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
