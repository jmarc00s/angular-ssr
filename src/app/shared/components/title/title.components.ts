import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './view/title.component.html'
})
export class TitleComponent implements OnInit {

  @Input() title = "";

  constructor() { }

  ngOnInit(): void { }
}
