import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LocalizationService, StorageService } from '../../../../core/services';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit {
  sideMenuPosition: boolean = true;
  currentRoute: string;
  items: MenuItem[];
  constructor(
    private router: Router,
    private storageService: StorageService,
    public translationServices: LocalizationService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit() {
    this.loadSideItems();
  }

  loadSideItems() {
    if (this.sideMenuPosition) {
      this.items = [
        {
          icon: 'pi pi-fw pi-home',
          label: 'Home',
        },
      ];
    } else {
      this.items = [
        {
          icon: 'pi pi-fw pi-home',
        },
      ];
    }
  }

  toggleSideMenu() {
    this.sideMenuPosition = !this.sideMenuPosition;
    this.loadSideItems();
  }

  openItem(route) {
    this.router.navigate([route]);
  }

}
