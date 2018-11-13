import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


@Input() public carName: string;
@Input() public VIN: string;
@Input() public Mileage: string;
@Input() public source: string;


  constructor() { }

  ngOnInit() {
  }

}
