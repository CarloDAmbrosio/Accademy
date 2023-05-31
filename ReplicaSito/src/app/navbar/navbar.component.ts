import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarDark!: boolean;
  constructor(private scroller:ViewportScroller){}
  
  scrollToChisiamo(){
    const chiSiamo:any = document.getElementById('chiSiamo')?.offsetTop;
    this.scroller.scrollToPosition([0, chiSiamo])
  }

  scrollToTecnologie(){
    const tecnologie:any = document.getElementById('tecnologie')?.offsetTop;
    this.scroller.scrollToPosition([0,tecnologie]);
  }

  scrollToBeni(){
    const beni:any = document.getElementById('beni')?.offsetTop;
    this.scroller.scrollToPosition([0,beni])
  }
  scrollToScienza(){
    const scienza:any = document.getElementById('scienza')?.offsetTop;
    this.scroller.scrollToPosition([0,scienza])
  }
  scrollToGiochi(){
    const giochi:any = document.getElementById('giochi')?.offsetTop;
    this.scroller.scrollToPosition([0,giochi])
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isNavbarDark = (window.scrollY > 0);
  }

}
