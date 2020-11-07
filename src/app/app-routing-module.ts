import {Routes} from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {AppComponent} from './app.component';






export const applicationRoutes: Routes =[
        {path: '', redirectTo: 'home', pathMatch:'full'}, 
        {path: 'home', component: AppComponent},
        {path: 'start', component: QuizComponent },
        {path: '**', component: AppComponent }
]