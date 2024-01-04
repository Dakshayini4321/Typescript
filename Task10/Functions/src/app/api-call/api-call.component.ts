

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  addDataFromAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.displayDataInTable(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }
}

  
  displayDataInTable(data) {
    const tableBody = document.getElementById("apiAddTableBody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      const user = data[i];
      const row = tableBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);
      const cell7 = row.insertCell(6);
      const cell8 = row.insertCell(7);

      cell1.innerHTML = user.name;
      cell2.innerHTML = user.username;
      cell3.innerHTML = user.email;
      cell4.innerHTML = user.company.name;
      cell5.innerHTML = user.address.state;
      cell6.innerHTML = user.phone;
      cell7.innerHTML = user.address.street;
      cell8.innerHTML = user.address.city;
    }
  }
