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

  percent:number;
  pass:String;
  fail:String;

  selected:String;
  correct:boolean;
  cur:any;
 

  constructor(private quiz_service:QuizService,  private router: Router){}
    

ngOnInit():void{

  this.cur="";
  this.correct=false;
 
 }


 ngDoCheck(){

  if(this.quiz_service.review)

  if(this.quiz_service.ready){
     this.answers_review=this.quiz_service.answers_review;
     this.quiz=this.quiz_service.quiz;
     this.pass="pass";
     this.fail="fail";
}
else{
  this.router.navigate(['option']);
}
}


search(input:any){

  switch(this.answers_review[input]) { 
    case this.quiz[input].a: { 
      this.selected=this.answers_review[input-1];
      this.cur="a";

      if(this.quiz[input].correct==this.selected)this.correct=true; else this.correct=false;
      console.log(this.correct);
       break; 
    } 
    case this.quiz[input].b: { 
      this.selected=this.answers_review[input-1];
      this.cur="b";

      if(this.quiz[input].correct==this.selected)this.correct=true; else this.correct=false;
      console.log(this.correct);

       break; 
    } 

    case this.quiz[input].c: { 
      this.selected=this.answers_review[input-1];
      this.cur="c";

      if(this.quiz[input].correct==this.selected)this.correct=true; else this.correct=false;
      console.log(this.correct);
      break; 
   } 

   case this.quiz[input].d: { 
    this.selected=this.answers_review[input-1];
    this.cur="d";

    if(this.quiz[input].correct==this.selected)this.correct=true; else this.correct=false;
    console.log(this.correct);
    break; 
 } 

    default: { 
       this.selected='Nothing was found';
       break; 
    } 
 } 



return true;

}



// is_selected_correct(index:any,is_selected:any){

//   switch(is_selected) { 
//     case this.quiz[index].correct: { 
//       return true;

 
//     }

//     default: { 
//         return false;
//       } 
//  } 




// }
































////End Class
}
