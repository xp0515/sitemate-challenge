import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgFor } from '@angular/common';
import { IssueListComponent } from './issue-list/issue-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IssueListComponent, AsyncPipe, NgFor, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'challenge';
}
