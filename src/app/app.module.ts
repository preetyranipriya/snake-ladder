import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PlayerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
