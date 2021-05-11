import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'app-user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'app-product-list', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }