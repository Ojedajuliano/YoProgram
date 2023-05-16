import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  categoria: string= "Dev Programming";
  urlbanner: string= "https://github.com/Ojedajuliano/Front-end/blob/main/WhatsApp%20Image%202023-04-27%20at%2018.21.35.jpeg?raw=true";
  Imagebanner: string= `url('${this.urlbanner}')` ;
  loginjoin: boolean=true;

}
