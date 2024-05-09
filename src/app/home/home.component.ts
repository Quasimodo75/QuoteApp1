import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService){


  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      console.log(data); 
    });

}}
