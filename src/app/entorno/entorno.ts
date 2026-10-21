import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.html',
  styleUrl: './entorno.css'
})
export class Entorno {
  protected readonly titulo = signal('Práctica de despliegues');
  protected readonly bienvenida = signal('Bienvenido a la aplicación de la práctica de gestión de entornos.');
  protected readonly entorno = signal('Entorno de aceptación UAT');
}
