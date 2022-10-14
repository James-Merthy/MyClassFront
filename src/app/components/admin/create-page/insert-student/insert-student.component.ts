import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EleveService} from "../../../../services/eleve.service";

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.css']
})
export class InsertStudentComponent implements OnInit {


  constructor(private eleveService : EleveService) { }

  profileForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    localId: new FormControl(''),
    userId: new FormControl(''),
    username: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.eleveService.createStudent(this.profileForm.value)

      .subscribe(data => console.log(data));

  }

}
