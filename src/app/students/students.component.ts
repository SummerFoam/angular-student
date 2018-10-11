import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  selecteHero: Student[];
  students: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }
  //查询所有
  getStudents(): void{
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  //删除
  delete(student: Student): void {
    this.students = this.students.filter(s => s !== student);
    this.studentService.deleteStudent(student).subscribe();
  }

  //添加
  add(name: string,age: number): void{
    name=name.trim();
    if(!name) {return;}
    this.studentService.addStudent({name,age} as Student)
      .subscribe(student => {
        this.students.push(student);
      })
  }
}
