import { Component, OnInit } from '@angular/core';
import {questions, QuizService} from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    quiz_quests: questions[];

  constructor(private quiz_service: QuizService) { }


  ngOnInit(): void {
    this.quiz_quests=this.quiz_service.get_quiz();

  }


  get_answers(list: any){

      const ans_list = Object.values(list);
            this.quiz_service.setAns_list( ans_list);

  }

  




}
