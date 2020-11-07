import { Component, OnInit } from '@angular/core';
import {questions, QuizService} from './quiz.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  show:boolean;
  quiz: questions[];
  load=false;

  constructor(private quiz_service:QuizService){
    this.show=false;
    

  }
    

ngOnInit():void{
  this.quiz_service.load_quiz().subscribe( (data)=>{ this.quiz=data; }, (error)=>{ 'Error loading data'; }, ()=>{}  );
 }

  show_outlet(){
    this.quiz_service.set_quiz(this.quiz)
    this.show =true;

   console.log( this.quiz_service.get_quiz() );
  }












}
