import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {questions, QuizService} from './quiz.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  quiz:questions[];

  constructor(private quiz_service:QuizService, private router: Router){
    
   }


ngOnInit():void{
// this.quiz_service.load_quiz().subscribe( (data)=>{ this.quiz=data; }, (error)=>{ 'Error loading data'; }, ()=>{}  );
// this.quiz_service.quiz=this.quiz;


 }












}
