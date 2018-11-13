import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sells-buyer-offer-website';

  public icon: boolean;
  public value: boolean;
  public iconLeft: boolean;
  public lists: Array<any> = 
  [
    {
      "Model":"Audi-RS7",
      "VIN": "1G6KD54Y63U187027",
      "status":"error"
    },
   {
      "Model":"Mercedes-C63 AMG",
      "VIN": "1FDAF57SX3EB32547",
      "status":"warning"
    },
   {
       "Model":"BMW-M3",
       "VIN":"1HTMPAFP06H332525",
       "status":"success"
    },
    {
      "Model":"AlfaRomeo-Guilia",
      "VIN":"2HGFB2F48DH116494",
      "status":"error"
    },
    {
     "Model":"Nissan-GTR",
     "VIN":"YV4952RA5F2500097",
     "status":"success"
    },
   {
     "Model":"Shellby-GT500",
     "VIN":"1C6RR6PT7ES426996",
     "status":"warning"
    }
  ];
  public headerData = {
      model: "2015 Nissan Xterra XLE",
      vin: "4A4AR4AUXFE018903",
      Mileage: "42,101",
      Source: "A-lane, 7106"
  }

  public carName: string;
  public VIN: string;
  public Mileage: string;
  public source: string;


  constructor(){}

  ngOnInit(){

    this.carName = this.headerData.model;
    this.VIN = this.headerData.vin;
    this.Mileage = this.headerData.Mileage;
    this.source = this.headerData.Source;

  }


  

  
}
