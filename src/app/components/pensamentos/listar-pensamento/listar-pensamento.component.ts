import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
    conteudo: 'O último burguês que pendurarmos, será aquele que nos vendeu a corda!',
    autoria: 'Lenin',
    modelo: 'modelo3'
    },
    {
      conteudo: 'Não se pode pensar em movimento radical, forte e vivo, onde não haja controvérsia. A unanimidade absoluta só existe nos cemitérios.',
      autoria: 'Stalin',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      autoria: 'Trotsky',
      modelo: 'modelo1'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
