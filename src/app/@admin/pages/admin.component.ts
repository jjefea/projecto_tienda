import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  toggledValue = true;
  toggled($event){
    console.log('admin',$event);
    this.toggledValue = $event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
