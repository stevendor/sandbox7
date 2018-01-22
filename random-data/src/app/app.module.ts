import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { UsersEditComponent} from './users/users-edit/users-edit.component';
import { UsersNewComponent } from './users/users-new/users-new.component';
import { FilterPipe } from './filter.pipe';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'},
  { path: 'home',
    component: HomeComponent},
  { path: 'about',
    component: AboutComponent},
  { path: 'users',
    component: UsersComponent,
    children: [
      { path: 'show/:id',
        component: UsersDetailComponent
      },
      { path: 'show/:id/edit',
        component: UsersEditComponent},
      { path: 'new',
        component: UsersNewComponent}
      ]},
  { path: 'groups',
    component: GroupsComponent},
  { path: '**',
    component: AboutComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    GroupsComponent,
    AboutComponent,
    HeaderComponent,
    UsersDetailComponent,
    UsersEditComponent,
    UsersNewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
