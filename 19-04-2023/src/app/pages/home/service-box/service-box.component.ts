import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css']
})
export class ServiceBoxComponent {
  @Input() service:any;
}