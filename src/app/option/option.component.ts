import { Component, OnInit, ViewChild, AfterViewChecked,  OnChanges} from '@angular/core';

import { Router } from '@angular/router';
import {questions, QuizService} from '../quiz.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  review:boolean;
  quiz: questions[];
  load=false;
  url:any;



  constructor(private quiz_service:QuizService, private router: Router) { }


  ngOnInit():void{
    this.review=this.quiz_service.review;
     }
    
     
    
    start(){
      this.router.navigate(['/start']);
    
    }
    
    
    review_btn(){
      this.router.navigate(['/review']);
    }
    
    // ngAfterViewChecked() {
    //   console.log('The review property has changed');
    // }

    review_ready(value:boolean){
        this.review=value;
        console.log(this.review);
    }


}
