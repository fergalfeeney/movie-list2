import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-list2';

  moviesList = [
    {id: 1, title: 'The Godfather', year: '1972', director: 'Francis Ford Coppola'},
    {id: 2, title: 'Millers Crossing', year: '1998', director: 'The Coen Brothers'},
    {id: 3, title: 'Dial M for Murder', year: '1954', director: 'Alfred Hitchcock'},
    {id: 4, title: 'Whiplash', year: '2014', director: 'Damien Chazelle'}
  ];
}
