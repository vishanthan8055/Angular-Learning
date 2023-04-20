import { Component } from '@angular/core';
import { FeedbackserviceService } from 'src/app/services/feedbackservice.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  feedlist:any;

  types:string[]=[
    "All",
    "Branding and Communication",
    "Inbound & Content Marketing",
    "Film & Webinar","Digital Marketing",
    "ECommerce & Websites",
    "Market Analysis"
  ]
  selected:string="All"
  
  constructor(private fs:FeedbackserviceService){
    this.fs.getFeedback().subscribe(
       {
         next: (data:any)=>this.feedlist = data,
         error: ()=> this.feedlist = []
       }
    )
  }
}
