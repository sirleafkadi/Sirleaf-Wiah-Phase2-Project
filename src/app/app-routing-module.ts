import {Routes} from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {AppComponent} from './app.component';
import { ReviewComponent } from './review/review.component';
import {OptionComponent} from './option/option.component';








export const applicationRoutes: Routes =[
        {path: '', redirectTo: '/option', pathMatch:'full'}, 
        {path: 'home', component: AppComponent},
        {path: 'start', component: QuizComponent },
        {path: 'review', component: ReviewComponent },
        {path: 'option', component: OptionComponent },
        {path: '**', component: OptionComponent }
]