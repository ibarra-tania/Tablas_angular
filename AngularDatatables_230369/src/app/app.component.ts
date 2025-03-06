import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DynamicTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDatatables_230369';
}
