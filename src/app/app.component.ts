import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Legalalliance';
    isLoading = true;
    isLogIn:boolean=false;

    ngOnInit() {
      // Simulate a delay while your app loads
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }
    
  
}
