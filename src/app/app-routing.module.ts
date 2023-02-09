import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamentos/editar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listarPensamento'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path:'listarPensamento',
    component:ListarPensamentoComponent
  },
  {
    path:'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path:'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
