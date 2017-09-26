import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonMappingList: any;
  jsonMappingListKeys: string[];
  nameText: string;
  searchedEmail: string;

  constructor(private http: HttpClient) {
    http.get('./assets/class-email-dictionary.json', { responseType: 'text' })
      .subscribe(data => {
        this.jsonMappingList = JSON.parse(data);
        this.jsonMappingListKeys = Object.keys(this.jsonMappingList);
      }
    );
  }

  searchEmail() {
    let email = this.jsonMappingList[this.nameText];
    let errorMessage = 'Name is not in list. PLEASE TRY AGAIN';

    if (email) {
      this.searchedEmail = email;
    } else {
      this.searchedEmail = errorMessage;
    }
  }
}
