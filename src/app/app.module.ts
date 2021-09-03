import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGoalComponent } from './create-goal/create-goal.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CurrentGoalsComponent } from './current-goals/current-goals.component';
import { GoalsQueueComponent } from './goals-queue/goals-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGoalComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    CurrentGoalsComponent,
    GoalsQueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
