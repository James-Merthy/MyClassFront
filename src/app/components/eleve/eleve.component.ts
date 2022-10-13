import { Component, OnInit } from '@angular/core';

import {IStudent} from "../../models/IStudent";
import {EleveService} from "../../services/eleve.service";

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {

  eleves: IStudent[] = [];

  constructor(private eleveService: EleveService) { }

  ngOnInit(): void {
    this.eleveService.getAll().subscribe(data => {
      this.eleves = data;
    });

  }

}
