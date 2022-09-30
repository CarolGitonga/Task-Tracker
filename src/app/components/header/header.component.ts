import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;
//a constructor run whenever an object/component is initialized
  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }
// ngOnInit is life cycle method. mostly used when initializing code eg ,an http request
  ngOnInit(): void {}
  
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url ===route;
  }

}
