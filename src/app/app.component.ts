import { Component } from '@angular/core';
import { UsuServiceService } from './services/usu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba_ATT';
  constructor (private usuService : UsuServiceService) {}

  prueba1() : void{
    this.usuService.getUser1("77").subscribe( (data:any) => {
      console.log("Resultado Prueba 1", data);
    })
  }
  prueba2() : void{
    this.usuService.getUser2("77").subscribe( (data:any) => {
      console.log("Resultado Prueba 2", data);
    })
  }
  ngOnInit(){
    this.prueba1();
    this.prueba2();

  }
}
