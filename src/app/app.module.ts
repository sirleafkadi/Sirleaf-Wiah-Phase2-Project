import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {applicationRoutes} from './app-routing-module';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizOptionComponent } from './quiz-option/quiz-option.component';
import { QuizComponent } from './quiz/quiz.component';
import { InstructionComponent } from './instruction/instruction.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizOptionComponent,
    QuizComponent,
    InstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
