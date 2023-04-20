import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-appbox',
  templateUrl: './appbox.component.html',
  styleUrls: ['./appbox.component.css']
})
export class AppboxComponent {
    @Input() title:string="";
    @Input() description:string="";
    @Input() imgs:string="";
    
}
