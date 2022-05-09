import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopBarHandlerService, ITopBar } from 'src/app/shared/services/top-bar-handler.service';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss'],
})
export class DefaultPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private tobbarService: TopBarHandlerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res: ITopBar) => {
      this.tobbarService.routeDate.next(res);
    });
  }
}
