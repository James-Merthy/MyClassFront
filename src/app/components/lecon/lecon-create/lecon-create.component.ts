import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LeconsService} from "../../../services/lecons.service";

@Component({
  selector: 'app-lecon-create',
  templateUrl: './lecon-create.component.html',
  styleUrls: ['./lecon-create.component.css']
})
export class LeconCreateComponent implements OnInit {


  constructor(private leconsService: LeconsService) { }

  profileForm = new FormGroup({
    nom: new FormControl('')
  });



  ngOnInit(): void {
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.leconsService.add(this.profileForm.value).subscribe(data => console.log(data));
  }
}
