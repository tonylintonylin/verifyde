import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild("verifydeWrapper") wrapper: ElementRef;
  
  ngAfterViewInit() {
    console.log("naafterinit");

    setInterval(() => { this.appear(); }, 2000);
    setInterval(() => { this.disaappear(); }, 3000);
  }

  appear() {
    console.log("appear");
    this.wrapper.nativeElement.style.opacity = 1;
  }

  disaappear() {
    console.log("disaappear");
    this.wrapper.nativeElement.style.opacity = 0;
  }
}