import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-feedbox',
  templateUrl: './feedbox.component.html',
  styleUrls: ['./feedbox.component.css']
})
export class FeedboxComponent {
    @Input() feed:any;
}
