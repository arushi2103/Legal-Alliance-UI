import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor() { }
  isLoading =true;
  ngOnInit(): void {
      // Simulate a delay while your app loads
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    
  }

}
