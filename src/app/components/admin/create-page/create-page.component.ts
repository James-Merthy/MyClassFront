import { Component, OnInit } from '@angular/core';
import {EleveService} from "../../../services/eleve.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  constructor(private eleveService : EleveService) { }

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.eleveService.createStudentUser(this.profileForm.value)

      .subscribe(data => console.log(data));

  }

}
