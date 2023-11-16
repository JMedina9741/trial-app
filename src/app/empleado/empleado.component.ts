import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
// Implementa interfaz
export class EmpleadoComponent implements OnInit{
  
  nombre="Javier";
  apellido="Medina";
  edad=26;
  /*empresa="FBI";
  llamaEmpresa(value:String) {
    
  }*/
  
  // Metodo constructor
  constructot() {}
// metodo ngOnInit
  ngOnInit(): void {
    
  }

}
