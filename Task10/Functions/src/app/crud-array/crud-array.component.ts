
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  storageKey = 'userData';
  userData: any[] = JSON.parse(localStorage.getItem(this.storageKey)) || [];

  displayUserData() {
    const tableBody = document.getElementById('userDataBody');
    if (tableBody) {
      tableBody.innerHTML = '';

      this.userData.forEach((user, index) => {
        const row = tableBody.insertRow();

        for (let i = 0; i < 8; i++) {
          const cell = row.insertCell(i);
          if (i === 0) {
            cell.textContent = user.Name.firstName + ' ' + user.Name.secondName;
          } else if (i === 7) {
            cell.innerHTML = <button class="btn btn-danger" (click)="deleteUser(${index})">Delete</button>;
          } else {
            cell.textContent = user[Object.keys(user)[i]];
          }
        }
      });
    }
  }

  deleteUser(index: number) {
    this.userData.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(this.userData));
    this.displayUserData();
  }

  ngOnInit() {
    this.displayUserData();
  }
}