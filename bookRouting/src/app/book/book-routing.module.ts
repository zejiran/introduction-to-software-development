import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListarComponent } from './book-listar/book-listar.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [{
  path: 'books',
  children: [
    {
      path: 'list',
      component: BookListarComponent
    },
    {
      path: ':id',
      component: BookDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
