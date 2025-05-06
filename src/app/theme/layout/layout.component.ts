import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isSidebarCollapsed = false;
  isSidebarHidden = false;
  onSidebarToggle(isCollapsed: boolean) {
    this.isSidebarCollapsed = isCollapsed;
  }

  hideSidebar() {
    this.isSidebarHidden = true;
    this.isSidebarCollapsed = false; // Ensure it is not collapsed when hidden
  }
}
