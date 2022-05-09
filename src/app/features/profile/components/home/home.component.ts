import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/core/services';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chardData: any;
  dataLoaded: boolean = false;
  itemInfo: any[];
  requestDetails: any;
  corporateName: any;

  constructor(private profileService: ProfileService, public translationServices: LocalizationService,) { }

  ngOnInit(): void {
    this.checkOnChangeLang();
    this.loadData();
  }

  checkOnChangeLang() {
    this.translationServices.checkOnChangeLang().subscribe(
      _ => {
        this.loadData()
      }
    )
  }

  loadData() {
    this.dataLoaded = true;
    this.profileService.corporateInfo().subscribe(
      response => {
        this.translationServices.getTranslate('Home_Info').subscribe((data: any) => {
          this.chardData = {
            labels: [data.AvailableBalance, data.OutstandingBalance],
            datasets: [
              {
                data: [response.availableBalance, response.currentBalance],
                backgroundColor: [
                  "#00c227",
                  "#ff7258"
                ],
                hoverBackgroundColor: [
                  "green",
                  "red"
                ]
              }]
          };
        });

        this.requestDetails = response;
        this.corporateName = response[this.translationServices.getStringWithCurrentLang('name')];
        this.dataLoaded = false;
      },
      error => {
      }
    );
  }
}
