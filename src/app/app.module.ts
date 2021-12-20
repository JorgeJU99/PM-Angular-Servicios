import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//servicios
import { EquipoService } from './servicios/equipo.service';
import { ServicioEquipoComponent } from './componentes/servicio-equipo/servicio-equipo.component';

@NgModule({
  declarations: [AppComponent, ServicioEquipoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EquipoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
