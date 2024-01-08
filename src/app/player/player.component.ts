import { Component, Input } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input() playerNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
