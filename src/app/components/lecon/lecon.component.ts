import { Component, OnInit } from '@angular/core';
import {LeconsService} from "../../services/lecons.service";
import {ILecon} from "../../models/ILecon";

@Component({
  selector: 'app-lecon',
  templateUrl: './lecon.component.html',
  styleUrls: ['./lecon.component.css']
})
export class LeconComponent implements OnInit {
  // variables
  lecons: ILecon[] = [];

  // constructor
  constructor(private leconsService: LeconsService) { }

  // getters

  // methods
  ngOnInit(): void {
    this.leconsService.getAll().subscribe(data => {
      this.lecons = data;
    });

  }



}
