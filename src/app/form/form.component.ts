import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataCard } from '../card/card-data.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }



 

  @Output() newData = new EventEmitter<any>()
  profileForm!: FormGroup;

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      age : new FormControl(''),
      name : new FormControl(''),
      address : new FormControl(''),
      company : new FormControl(''),
      phone : new FormControl(''),
    });
  }

  isShowFormTable: boolean = false; 
  isHideFormTable : boolean = false;

  showForm() {
    this.isShowFormTable = true;
    this.isHideFormTable = false;
  }
  hideForm() {
    this.isHideFormTable = true;
    this.isShowFormTable = false;
    this.profileForm.reset();
  }


  submitForm() {
    this.newData.emit(this.profileForm.value);
    this.hideForm()
  }

}
