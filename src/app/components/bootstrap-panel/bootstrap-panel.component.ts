import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './bootstrap-panel.component.html',
  styleUrls: ['./bootstrap-panel.component.css']
})
export class BootstrapPanelComponent implements OnInit {
courses=[12,2]
  constructor() { }

  ngOnInit(): void {
  }

}
