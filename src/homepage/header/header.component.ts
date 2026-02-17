import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showGlbSrchFlg: boolean = false;
  constructor(public router: Router){

  }

  showGlbSrch(){
    if(this.showGlbSrchFlg){
      this.showGlbSrchFlg = false
    } else {
      this.showGlbSrchFlg = true;
    }
  }

  tologin(){
    this.router.navigateByUrl('login')
  }

  routerFn(router: any){
    this.router.navigateByUrl(router)
  }
}
