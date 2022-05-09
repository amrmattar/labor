import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LocalizationService } from 'src/app/core/services';
import { TopBarHandlerService, ITopBar } from 'src/app/shared/services/top-bar-handler.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  tabs: MenuItem[];
  activeItem: MenuItem;
  langChange: boolean = true;

  constructor(
    private toolbarService: TopBarHandlerService,
    private activatedRoute: ActivatedRoute,
    public translationServices: LocalizationService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res: ITopBar) => {
      this.toolbarService.routeDate.next(res);
    });

    this.checkOnChangeLang()
    this.activeTab(this.activatedRoute.children[0].routeConfig.path)
  }

  checkOnChangeLang() {
    this.translationServices.checkOnChangeLang().subscribe(
      res => {
        this.langChange = false
        setTimeout(() => {
          this.langChange = this.activeTab(this.activatedRoute.children[0].routeConfig.path)
        }, 50);
      }
    )
  }


  activeTab(activeTab) {
    this.tabs = [
      {
        label: this.translationServices.translateIT('Profile_Details_Taps.Home'),
        routerLink: 'home'
      },
      // {
      //   label: tabs.BillTaxes,
      //   routerLink: 'bill&taxes'
      // },
      // {
      //   label: tabs.ECard,
      //   routerLink: 'e-card'
      // },
      {
        label: this.translationServices.translateIT('Profile_Details_Taps.ETransfer'),
        routerLink: 'e-transfer'
      },
      {
        label: this.translationServices.translateIT('Profile_Details_Taps.Other_Service_Request'),
        routerLink: 'other-service-request'
      },
      // {
      //   label: tabs.Manage_Drivers,
      //   routerLink: 'manage-drivers'
      // },
      // {
      //   label: tabs.Transfer_to_drivers,
      //   routerLink: 'transfer-to-drivers'
      // },
      {
        label: this.translationServices.translateIT('Profile_Details_Taps.Installments'),
        routerLink: 'installments'
      },
      {
        label: this.translationServices.translateIT('Profile_Details_Taps.Statements'),
        routerLink: 'statements'
      },
    ];

    this.activeItem = this.tabs[this.tabs.findIndex(x => x.routerLink === activeTab)];
    return true
  }


}
