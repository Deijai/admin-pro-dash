import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promessa',
  templateUrl: './promessa.component.html',
  styleUrls: ['./promessa.component.css'],
})
export class PromessaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*   const promises = new Promise((resolve, reject) => {
      resolve('Ola mundo');
    });

    promises
      .then((res) => console.log('Terminei: ', res))
      .catch((error) => console.log(error));

    console.log('Fim init'); */

    this.getUsers().then( users => console.log( 'users: ', users));
  }

  getUsers() {

    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));

    });



  }
}
