import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListarComponent } from './book/book-listar/book-listar.component';

const routes: Routes = [
  { path: '', component: BookListarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
