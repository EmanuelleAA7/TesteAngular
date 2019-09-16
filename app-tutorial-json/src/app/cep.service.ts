import{Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CepComponent} from './cep/cep.component';
@Injectable()
export class CepService
{
    

    constructor(private httpClient: HttpClient){}


    buscar(cep):Observable<any>{
        debugger
     
        
        return this.httpClient.get(`https://viacep.com.br/ws/${cep.cep}/json/`);
        // return this.httpClient.get(`https://viacep.com.br/ws/09530530/json/`);
        debugger
        // return teste;

    }

}