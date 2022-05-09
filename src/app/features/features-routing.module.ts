import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UnAuthoratizeComponent } from './un-authoratize/un-authoratize.component';
import { LoadPermissionResolver } from "./main-layout/load-permission.resolver";
import { DefaultPageComponent } from './default-page/default-page.component';
import { FinanceComponent } from './finance/finance.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // resolve: { userPermission: LoadPermissionResolver },
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
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
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
