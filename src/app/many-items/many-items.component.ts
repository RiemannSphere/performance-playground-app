import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Item = {
  id: number;
  name: string;
}

@Component({
  selector: 'app-many-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './many-items.component.html',
  styleUrl: './many-items.component.css'
})
export class ManyItemsComponent {
  items: Item[] = [];

  constructor() {
    for (let i = 0; i < 260; i++) {
      this.items.push({ id: i + 1, name: `${i + 1}` });
    }
  }

  trackById(_: number, item: Item): number {
    return item.id;
  }
}
