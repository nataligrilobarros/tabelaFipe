import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  constructor( private http : HttpClient) { } 

  buscarTodasMasrcas(tipo: string): Observable<any>{
    return this.http.get(`http://fipeapi.appspot.com/api/1/${tipo}/marcas.json`);
  }
  
  buscarTodosModelos(tipo: string, marca: string): Observable<any>{
    return this.http.get(`http://fipeapi.appspot.com/api/1/${tipo}/veiculos/${marca}.json`)
  }

  buscarTodosVeiculosService(tipo: string, marca: string, veiculo: string): Observable<any>{
    return this.http.get(`http://fipeapi.appspot.com/api/1/${tipo}/veiculo/${marca}/${veiculo}.json`)
  }

  buscarTodosAnos(tipo: string, marca: string, veiculo: string, idAno: string):  Observable<any>{
    console.log(`http://fipeapi.appspot.com/api/1/${tipo}/veiculo/${marca}/${veiculo}/${idAno}.json`);
    
    return this.http.get(`http://fipeapi.appspot.com/api/1/${tipo}/veiculo/${marca}/${veiculo}/${idAno}.json`)

  }


}
