import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import {questions, QuizService} from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 quiz: questions[];
  answers_review: any[];
  total:number;
  correct:number;

  percent:number;
  pass:String;
  fail:String;

  selected:String;
 
 

  constructor(private quiz_service:QuizService,  private router: Router){}
    

ngOnInit():void{

  this.pass="pass";
  this.fail="fail";

  this.total=0;

 
 }


 ngDoCheck(){

  if(this.quiz_service.review){}

  if(this.quiz_service.ready){
     this.answers_review=this.quiz_service.answers_review;
     this.quiz=this.quiz_service.quiz;
  
}
  
else{
  this.router.navigate(['option']);
}

}


_selected(index:number){
 this.selected=this.answers_review[index-1];
 return true;
}



















////End Class
}
