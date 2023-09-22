import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home when the path is empty
  { path: '**', redirectTo: '/home' }, // Redirect to home for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
