import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  // cepUrl = 'https://viacep.com.br/ws/{cep}/json/';

  constructor(private http:HttpClient) { }

  buscar(cep:string){
      this.http.get(`https://viacep.com.br/ws/{cep}/json/`)
      .toPromise()
      .then(response => {
        console.log(response);
      })
 
    }
  // buscar(){
  // return this.http.get(`${this.cepUrl}`); 
  // }

}
