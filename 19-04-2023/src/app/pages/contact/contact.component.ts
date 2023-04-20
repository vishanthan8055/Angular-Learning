import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactlist:any;
        constructor(private cs:ContactService){
          this.cs.getContacts().subscribe(
             {
               next: (data:any)=>this.contactlist = data,
               error: ()=> this.contactlist = []
             }
          )
        }
}
