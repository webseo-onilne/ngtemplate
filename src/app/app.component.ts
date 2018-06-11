import { Component } from '@angular/core';
import { NetworkService } from './core/network.service';
import { WorkerService } from './core/worker.service';
import { ThemeService } from './core/theme.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { fadeInOut } from './route.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOut]
})
export class AppComponent {

  public title = 'App Title';

  constructor(
    public theme: ThemeService,
    public network: NetworkService,
    public auth: AngularFireAuth,
    private sw: WorkerService) {

      // check the service worker for updates
      this.sw.checkForUpdates();
  }
}
