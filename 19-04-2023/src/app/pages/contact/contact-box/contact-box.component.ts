import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styleUrls: ['./contact-box.component.css']
})
export class ContactBoxComponent {
  @Input()  contact:any;
}
