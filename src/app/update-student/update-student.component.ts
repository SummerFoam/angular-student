import { Component, OnInit,Input } from '@angular/core';
import {Student} from '../student';
// 通过 HeroService 从服务器上获取具有这个 id 的学生数据
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  @Input() student: Student
  constructor(
    private route: ActivatedRoute,//保存着到这个 HeroDetailComponent 实例的路由信息
    private studentService:StudentService,//从远端服务器获取数据
    private location: Location  //是一个 Angular 的服务，用来与浏览器打交道,导航回上一个视图
  ) { }

  //获取某个人的信息，调用student.service.ts里getStudent方法
  ngOnInit(): void {
    this.getStudent();
  }
  getStudent(): void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
    .subscribe(student => this.student = student);
  }

  //返回
  goBack(): void{
    this.location.back();
  }

  //保留修改并返回写到服务器
  save(): void{
    this.studentService.updateStudent(this.student)
    .subscribe(() => this.goBack());
  }
}
