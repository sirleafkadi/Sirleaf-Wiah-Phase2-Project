import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService  {

  private quiz_quests: questions[];
  private ans_list: any[];
  constructor(private http:HttpClient) { 

  }


load_quiz():Observable <questions[]> {
    return this.http.get<questions[]>  ('http://localhost:3000/quiz');
}


set_quiz(quiz:questions[]){
  this.quiz_quests=quiz;
}
                              

 get_quiz() :questions[]{
    return this. quiz_quests;
}

setAns_list(list:any[]){
this.ans_list=list;
}









}















export class questions{

  constructor(){}
  // public id:number, public question:String, ans1:String, ans2:String, ans3:String, ans4:String, correct:String
}