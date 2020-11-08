import { HttpClient } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public ready:boolean;
  public review:boolean;
  public quiz: questions[];
  public answers_review: any;


constructor(private http:HttpClient) { this.review=true; this.ready=false; }
 



load_quiz():Observable <questions[]> {
  return this.http.get<questions[]>  ('http://localhost:3000/quiz');
}


set_quiz(quiz_input: questions[]){
  this.quiz= quiz_input;
  // console.log('Quiz Service after set'+ '\n '+this.answers_review);
}


test(){
  console.log(this.answers_review);
}



}















export class questions{
  [x: string]: string;

  constructor(){}
  // public id:number, public question:String, ans1:String, ans2:String, ans3:String, ans4:String, correct:String
}