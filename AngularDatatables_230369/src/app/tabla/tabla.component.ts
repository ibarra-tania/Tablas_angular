import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tabla',
  standalone: true,
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  alumnos = [
    { id: 1, nombre: 'Uriel', apellido: 'Martínez', deporte: 'Fútbol', marca: 'Puma' },
    { id: 2, nombre: 'José', apellido: 'Torres', deporte: 'Baloncesto', marca: 'Adidas' },
    { id: 3, nombre: 'Edwin', apellido: 'Salvador', deporte: 'Natación', marca: 'Nike' },
    { id: 4, nombre: 'Giovanny', apellido: 'Pavas', deporte: 'Fútbol', marca: 'Reebok' }
  ];

  // Variables para los filtros
  filtroNombre = '';
  filtroApellido = '';
  filtroDeporte = '';
  filtroMarca = '';

  // Método para filtrar la tabla
  get alumnosFiltrados() {
    return this.alumnos.filter(alumno =>
      (!this.filtroNombre || alumno.nombre.includes(this.filtroNombre)) &&
      (!this.filtroApellido || alumno.apellido.includes(this.filtroApellido)) &&
      (!this.filtroDeporte || alumno.deporte === this.filtroDeporte) &&
      (!this.filtroMarca || alumno.marca === this.filtroMarca)
    );
  }

  // Obtener opciones únicas para los filtros
  get deportes() {
    return [...new Set(this.alumnos.map(alumno => alumno.deporte))];
  }

  get marcas() {
    return [...new Set(this.alumnos.map(alumno => alumno.marca))];
  }
}
