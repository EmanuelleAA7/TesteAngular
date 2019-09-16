


import { Component, OnInit } from '@angular/core';
import {CepService} from '../cep.service';
import {Cep}  from '../cep';
@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  
  constructor(private cepService: CepService){

  }
  
  cep = new Cep()

  ngOnInit(){
    
    // return this.cepService.buscar(this.cep).subscribe(data => this.cep= data);

  }

  carregar(){
    
    return this.cepService.buscar(this.cep).subscribe(

      cep =>
      {
        this.cep = cep;
      }
    );
  }


}