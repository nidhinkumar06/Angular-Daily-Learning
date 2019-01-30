import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  disableButton = false;

  constructor() { 
    setTimeout(() => {
      this.disableButton = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
