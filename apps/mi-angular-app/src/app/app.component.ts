import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { greet } from '@trucos/utils'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'trucos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mi-angular-app';
  greeting= greet('testprueba');
}
