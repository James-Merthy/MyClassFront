import { Component, OnInit } from '@angular/core';
import {IStudent} from "../../../models/IStudent";
import {EleveService} from "../../../services/eleve.service";

@Component({
  selector: 'app-eleve-list',
  templateUrl: './eleve-list.component.html',
  styleUrls: ['./eleve-list.component.css']
})
export class EleveListComponent implements OnInit {
  eleves: IStudent[] = [];

  constructor(private eleveService: EleveService) { }

  ngOnInit(): void {
    this.eleveService.getAll().subscribe(data => {
      this.eleves = data;
    });

  }
}
