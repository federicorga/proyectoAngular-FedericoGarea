import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { DetailsComponent } from './courses/pages/details/details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'students',
    component: StudentsComponent,
    data: { title: 'Students' },
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: { title: 'Courses' },
  },
  {
    path: 'courses/:title',
    component: DetailsComponent,
    data: { title: 'Course Details' },
  },
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'Users' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
