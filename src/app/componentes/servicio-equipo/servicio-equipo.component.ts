import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../servicios/equipo.service';

@Component({
  selector: 'app-servicio-equipo',
  templateUrl: './servicio-equipo.component.html',
  styleUrls: ['./servicio-equipo.component.css'],
})
export class ServicioEquipoComponent implements OnInit {
  mensaje = '';
  arrayEquipos = [{ nombre: '', marca: '', anio: 0 }];

  constructor(private servicioEquipo: EquipoService) {}

  ngOnInit(): void {
    this.obtenerEquipos();
    this.mensaje = this.servicioEquipo.mensaje();
  }

  obtenerEquipos() {
    this.arrayEquipos = this.servicioEquipo.getEquipo();
    console.log(this.arrayEquipos);
  }
}
