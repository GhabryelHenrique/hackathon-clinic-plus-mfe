import { Component } from '@angular/core';
import { ProductListComponent } from './features/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'remote-app';
}
