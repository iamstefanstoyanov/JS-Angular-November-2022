import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { UserDetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { UserResolver } from './user-detail.rosolver';
import { AuthGuard } from './user-detail.guard';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/list',
        component: UserListComponent,
      },
      {
        path: 'user/detail/:id',
        resolve: { user: UserResolver},
        canActivate:[AuthGuard],
        component: UserDetailComponent,
      },
    ])
  ],
  exports:[
    UserListComponent
  ]
})
export class UserModule {
  static forRoot(config: any): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [
        {
          provide: 'routes',
          useValue: config,
          multi: true
        }
      ]
    }
  }

  static forChild(config: any): ModuleWithProviders<UserModule> { // forFeature
    return {
      ngModule: UserModule,
      providers: [
        {
          provide: 'routes',
          useValue: config,
          multi: true
        }
      ]
    }
  }
}