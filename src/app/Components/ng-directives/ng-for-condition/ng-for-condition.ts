import { Component } from '@angular/core';



interface Movie {
movie: string;
hero: string
}

interface Industry {
type: string;
movies: Movie[];
}

@Component({
  selector: 'app-ng-for-condition',
  standalone: false,
  templateUrl: './ng-for-condition.html',
  styleUrl: './ng-for-condition.css'
})
export class NgForCondition {

    industryType: Industry[] = [
    {
      type: 'Action',
      movies: [
        { movie: 'Mad Max: Fury Road' , hero: 'Kamal'},
        { movie: 'Die Hard', hero: 'Kamal' },
      ]
    },
    {
      type: 'Comedy',
      movies: [
        { movie: 'The Pirate' , hero: 'Kamal'},
        { movie: 'Superbad', hero: 'Kamal' },
      ]
    }
  ];

}
