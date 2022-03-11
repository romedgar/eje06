import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  modes = ['date','date-time','month','month-year','time','time-date','year'];
  selectedMode = 'date';
  mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
  dia = ['Doming','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
  showPicker = false;
  
  dateValue = formatDate(new Date(),'yyyy-MM-dd','en-US')
  options = ['Boda','Bautizo','Cumpleaños','Quinceañera']

  //Campos de card
  public forDate: string;
  public nombre: string;
  public tipo: string;
  public cel: string;


  

  constructor(private sharing:DataSharingService) {
  }

  dateChanged(value){
    this.dateValue = value
    this.fixDate()

  }

  fixDate(){
    var d = new Date(this.dateValue);
    var dayName = this.dia[d.getDay()]
    var dayMonth = this.mes[d.getMonth()]
    return dayName+", "+d.getDate()+" de "+dayMonth+" de "+d.getFullYear();
  }

  public addCard(){
    this.sharing.addCards(this.fixDate(),this.nombre,this.tipo,this.cel);
  }

}
