import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
post = new FormGroup({
  title: new FormControl('default title'),
  body: new FormControl(),
  tags: new FormArray([
    new FormControl('angular'),
    new FormControl('HTML'),
    new FormControl('CSS')
  ])
});
  constructor() { }

  ngOnInit() {
  }

}
