import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = [];

  ngOnInit() {
    this.addDataFromAPI();
  }

  addDataFromAPI() {
    console.log('Fetching data from API...');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.users = data)
      .catch(error => console.error('Error fetching users:', error));
  }

  updateUser(userId: number) {
    const newName = prompt('Enter new name:');
    const newUsername = prompt('Enter new username:');

    if (newName !== null && newUsername !== null) {
      console.log('Updating');
      this.refreshTable();
    }
  }

  deleteUser(userId: number) {
    const confirmed = confirm('Delete?');
    if (confirmed) {
      console.log('Delete');
      this.refreshTable();
    }
  }

  refreshTable() {
    this.addDataFromAPI();
  }
}
Write