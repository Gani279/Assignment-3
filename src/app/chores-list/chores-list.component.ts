import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chores-list',
  standalone: true,
  imports: [],
  templateUrl: './chores-list.component.html',
  styleUrl: './chores-list.component.css'
})
export class ChoresListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not Implemented.');
  }
  chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
  constructor() { }

}
