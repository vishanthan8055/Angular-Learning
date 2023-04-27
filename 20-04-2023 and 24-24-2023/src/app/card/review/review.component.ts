import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  @Input() prod:string | undefined;
  feedbackForm:any;

       constructor(private fb:FormBuilder,private rs:ReviewService){
        
       this.feedbackForm = this.fb.group({
        fname:['',[Validators.required,Validators.minLength(3)]],
        email:['',[Validators.required]],  
        message:['',[Validators.required,Validators.minLength(15)]]
        });
       }

       saveFeedback(product: any){

        
        var temp:any={
          id: Math.round(Math.random()*10000),
          fname: this.feedbackForm.value.fname,
          email: this.feedbackForm.value.email,
          message:this.feedbackForm.value.message,
          product:product
        
        }
        this.rs.postReview(temp).subscribe(
         { 
          next: data=>{
            alert('Your Feedback is saved')
            location.reload();
          },
          error:(error)=>alert('Not saved ---some Error')
        }
    
        )
    
      }
}
