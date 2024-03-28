import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-photos',
  standalone: true,
  imports: [],
  templateUrl: './fav-photos.component.html',
  styleUrl: './fav-photos.component.css'
})
export class FavPhotosComponent implements OnInit {
  photosTitle='Photo/Image Section Title Here';
  image1 = 'assets/Virat.jpg';
  image2 = 'assets/ABD.jpg';
  image3 = 'assets/Maxwell.jpg';
  constructor() { }
  ngOnInit(): void {
    
  }

}
