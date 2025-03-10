import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { FormsModule, CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, TablaComponent],
  imports: [BrowserModule, CommonModule, FormsModule], // Agregar CommonModule y FormsModule
  bootstrap: [AppComponent]
})
export class AppModule {}
