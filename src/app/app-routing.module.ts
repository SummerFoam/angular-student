import { NgModule } from '@angular/core';
import{RouterModule,Routes} from "@angular/router";
import {StudentsComponent} from './students/students.component'
import { ROUTES } from '@angular/router/src/router_config_loader';
import {UpdateStudentComponent} from './update-student/update-student.component';
import { from } from 'rxjs/internal/observable/from';
const routes:Routes = [
   //添加默认路由
   {
    path:'',
    //这个路由会把一个与空路径“完全匹配”的 URL 重定向到路径为 '/dashboard' 的路由
    redirectTo:"/students",
    pathMatch:'full'
  },
   //学生列表
   {
    path:'students',
    component:StudentsComponent
  },
  //修改
  {
    path:'update/:id',
    component:UpdateStudentComponent
  },
]

@NgModule({
  imports: [   
    RouterModule.forRoot(routes)
  ],
 exports: [RouterModule]
})
export class AppRoutingModule { }
