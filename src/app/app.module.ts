import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

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
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
