import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    //Campos de card
    public fechas: string[]=["Viernes, 11 de marzo de 2022"];
    public nombres: string[]=["Prueba"];
    public tipos: string[]=["Bautizo"];
    public cels: string[]=["3111931012"];



  constructor(private sharing: DataSharingService) {
    this.fechas = sharing.getFechas();
    this.nombres = sharing.getNombres();
    this.tipos = sharing.getTipos();
    this.cels = sharing.getCelular();
  }

  public call(numero: string){
    //this.callNumber.callNumber(numero,true)
    //.then(res => console.log('Launched dialer!',res))
    //.catch(err => console.log('Error launching dialer',err))
  }

}
