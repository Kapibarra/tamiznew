import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './homepage/shared/components/header/header.component';
import { HeroComponent } from './homepage/shared/components/hero/hero.component';
import { SymptomesComponent } from './homepage/shared/components/symptomes/symptomes.component';
import { PickupComponent } from './homepage/shared/components/pickup/pickup.component';
import { AboutComponent } from './homepage/shared/components/about/about.component';
import { IngridientsComponent } from './homepage/shared/components/ingridients/ingridients.component';
import { WorkwayComponent } from './homepage/shared/components/workway/workway.component';
import { ClientsComponent } from './homepage/shared/components/clients/clients.component';
import { QuestionsComponent } from './homepage/shared/components/questions/questions.component';
import { MapComponent } from './homepage/shared/components/map/map.component';
import { FooterComponent } from './homepage/shared/components/footer/footer.component';
import { BurgerComponent } from './homepage/shared/components/burger/burger.component';
import { MainpageComponent } from './homepage/mainpage/mainpage.component';
import { QuestionItemComponent } from './homepage/shared/components/questions/question-item/question-item.component';
import { StepperComponent } from './homepage/shared/components/stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponentComponent } from './homepage/shared/components/dialog-component/dialog-component.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SymptomesComponent,
    PickupComponent,
    AboutComponent,
    IngridientsComponent,
    WorkwayComponent,
    ClientsComponent,
    QuestionsComponent,
    MapComponent,
    FooterComponent,
    BurgerComponent,
    MainpageComponent,
    QuestionItemComponent,
    StepperComponent,
    DialogComponentComponent
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
