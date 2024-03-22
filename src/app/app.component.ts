import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from "./movie-list/movie-list.component";
import { ChoresListComponent } from "./chores-list/chores-list.component";
import { FavPhotosComponent } from "./fav-photos/fav-photos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MovieListComponent, ChoresListComponent, FavPhotosComponent]
})
export class AppComponent {
  title = 'Day2_Assignment';
}
