import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {questions, QuizService} from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    review:boolean;
    quiz: questions[];
    user_anser: any[];


  constructor(private quiz_service: QuizService, private router: Router) {  }
  
  ngOnInit(): void {
    this.quiz_service.load_quiz().subscribe( (data)=>{ this.quiz=data; }, (error)=>{ 'Error loading data'; }, ()=>{}  );
   
  }


  submit(list: any){
    

    this.quiz_service.set_quiz(this.quiz);
   const ansr = Object.values(list);
    this.quiz_service.review=false;
  
    if(confirm('Do you want to continue?')) {this.quiz_service.answers_review=ansr;  this.quiz_service.ready=true; this.router.navigate(['option']);} else alert('Submission cancelled');
 }


  cancel(){
    if(confirm('Do you want to cancel?')){this.router.navigate(['/option']); this.quiz_service.review=true; }
    }






}
