import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isCollapsed: boolean = false;
  @Input() isHidden: boolean = false;
  role;
  @Output() sidebarToggle = new EventEmitter<boolean>();
  activeRoute: string = '';

  constructor(private router: Router) {
    this.role = localStorage.getItem('role');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveRoute();
      }
    });
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggle.emit(this.isCollapsed);
  }
  hideSidebar() {
    this.isHidden = true;
    this.isCollapsed = false; // Ensure it is not collapsed when hidden
  }

  navigate(link: string) {
    this.router.navigate([link]);
  }

  private setActiveRoute() {
    const url = this.router.url;
    if (url.includes('customers-list') || url.includes('customer-add')) {
      this.activeRoute = 'customers';
    }
     else if (url.includes('transctions-list') || url.includes('project-add')) {
      this.activeRoute = 'transctions';
    } else if (url.includes('loyalty-programs-list') || url.includes('task-add')) {
      this.activeRoute = 'programs';
    } else if (url.includes('rewards-list')) {
      this.activeRoute = 'rewards';
    } else if (url.includes('dashboard') ) {
      this.activeRoute = 'dashboard';
    }else if (url.includes('my-rewards') ) {
      this.activeRoute = 'myrewards';
    }
    else if (url.includes('password') ) {
      this.activeRoute = 'password';
    }
  }

  logout(){
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  

}