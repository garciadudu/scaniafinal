import { Component } from '@angular/core';
import { Cliente } from './cliente.interface';
import { ClienteService } from './cliente.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  ClienteService: ClienteService;
  constructor(_ClienteService: ClienteService) {
    
    this.ClienteService = _ClienteService;
    this.ClienteService.carregarMock();
  }

  salvar = function (data: Cliente) { 
    if (data.Email!==null && data.Email!==undefined && !data.Email.includes('@') && !data.Email.includes('.')) {
      alert('Email inválido');
    }

    var regra = new RegExp('/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/');

    var meuTest = regra.exec(data.Telefone);

    if (meuTest !== null && meuTest !== undefined) {
        alert("telefone inválido");
        return false;
    } else {

        return true;
    }   


    if (data.Id !== null || data.Id !== undefined) {
        // alteração
    }
  }
}
