import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  // styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  today: number = Date.now();
  ngOnInit(): void {
  }

}
