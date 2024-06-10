import { Component, OnDestroy } from '@angular/core';
import { ObservablesService } from './services/observables.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  title = 'TasksBoard';

  constructor(
    protected data: DataService,
    private observables: ObservablesService
  ) {}

  ngOnDestroy(): void {
    this.observables.destroy$.next("destroy");
    this.observables.destroy$.complete();
  }
}
