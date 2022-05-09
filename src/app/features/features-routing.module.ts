import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UnAuthoratizeComponent } from './un-authoratize/un-authoratize.component'; import { DefaultPageComponent } from './default-page/default-page.component';
import { FinanceComponent } from './finance/finance.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
      },
      {
        path: 'products',
        component: DefaultPageComponent,
        data: {
          pageTitle: 'Dashboard',
        },
      },
      {
        path: 'finance',
        component: FinanceComponent,
      },
      {
        path: 'Unauthorized',
        component: UnAuthoratizeComponent,
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
