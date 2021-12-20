import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  equipos = [
    { nombre: 'Laptop', marca: 'Asus', anio: 2021 },
    { nombre: 'Telefono', marca: 'Xiaomi', anio: 2020 },
    { nombre: 'Impresora', marca: 'Epson', anio: 2019 },
    { nombre: 'PC', marca: 'Dell', anio: 2021 },
  ];
  mensajeServicio = 'Mensaje de prueba de EquipoService!';

  constructor() {
    console.log('EquipoService funcionando');
  }

  mensaje() {
    return this.mensajeServicio;
  }
  getEquipo() {
    return this.equipos;
  }
}
