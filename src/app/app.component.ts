import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book';

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyAC2O8hMKr1jpU_n7gGnWNX18dJDX2fIL0",
      authDomain: "book-angular-a49ed.firebaseapp.com",
      databaseURL: "https://book-angular-a49ed.firebaseio.com",
      projectId: "book-angular-a49ed",
      storageBucket: "book-angular-a49ed.appspot.com",
      messagingSenderId: "374822529160",
      appId: "1:374822529160:web:ad3bbf3cdb38a4ff9f973d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
