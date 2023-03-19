import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  constructor(private sidebarService: SidebarService, private userService: UserService) {
    this.menuItems = this.sidebarService.menu;
  }

  ngOnInit(): void {}

  public logout(){
    this.userService.logout();
  }
}
