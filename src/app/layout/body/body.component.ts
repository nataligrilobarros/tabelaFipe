import { FipeModel } from './../../model/fipe.model';
import { Component, OnInit } from '@angular/core';
import { FipeService } from 'src/app/services/fipe.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  fipe : FipeModel = new FipeModel();
  veiculos: FipeModel[];
  marcas: FipeModel[];
  anos: FipeModel[];
  preco: FipeModel;

  constructor(private fipeService: FipeService) { }

  ngOnInit() {
  }

  buscarTipoVeiculo(){
    this.fipeService.buscarTodasMasrcas(this.fipe.tipo).subscribe(listaVeiculos => {
        this.marcas = listaVeiculos;      
    });
  }

  selecionarMarca(){
    this.fipeService.buscarTodosModelos(this.fipe.tipo, this.fipe.marca).subscribe(listaVeiculos => {
        this.veiculos = listaVeiculos;      
    });
  }

  selecionarVeiculo(){
     this.fipeService.buscarTodosVeiculosService(this.fipe.tipo, this.fipe.marca, this.fipe.veiculo).subscribe(listaAnos => {
        this.anos = listaAnos;      
    });
  }

  selecionarAnoVeiculo(){
    this.fipeService.buscarTodosAnos(this.fipe.tipo, this.fipe.marca, this.fipe.veiculo, this.fipe.id).subscribe(preco =>{
      this.fipe = preco;
    });
  }

}
