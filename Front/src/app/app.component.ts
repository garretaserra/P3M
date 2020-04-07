import { Component } from '@angular/core';
import {ProyectosService} from "../services/proyectos.service";
import {Proyecto} from "../models/proyecto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';

  newProyecto: Proyecto = new Proyecto();

  proyectos: [Proyecto];

  constructor(
    private proyectosService: ProyectosService
  ) {
  }

  async addProyecto() {
    console.log(this.newProyecto);
    await this.proyectosService.addProyecto(this.newProyecto).toPromise();
  }

  async updateProyecto() {
    this.proyectos = await this.proyectosService.getAllProyecto().toPromise();
  }
}
