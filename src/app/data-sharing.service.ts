import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {


  private fechas:string[]=["Viernes, 11 de marzo de 2022"];
  private nombres:string[]=["Sofi y Angel"];
  private tipos:string[]=["Boda"];
  private celular:string[]=["311913012"];

  constructor() { }

  public addCards(fecha:string,nombre:string,tipo:string,cel:string){
    this.fechas.push(fecha)
    this.nombres.push(nombre)
    this.tipos.push(tipo)
    this.celular.push(cel)
  }

  public getFechas(){
    return this.fechas;
  }
  public getNombres(){
    return this.nombres;
  }
  public getTipos(){
    return this.tipos;
  }
  public getCelular(){
    return this.celular;
  }
}
