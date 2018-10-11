import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Student} from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private stuUrl="http://127.0.0.1:8080/springBootTest/stu";

  constructor(private http:HttpClient) { }
  //查询所有
  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.stuUrl)
  }

  //删除
  deleteStudent(student: Student | number): Observable<Student>{
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.stuUrl}/${id}`;
    return this.http.delete<Student>(url)
  }

  //添加
  addStudent(student: Student): Observable<Student>{
    const httpOptions= {
      headers: new HttpHeaders({'content-type':'application/json'})
    }
    return this.http.post<Student>(this.stuUrl,student)
  }

  //通过Id获取某个人的信息
  getStudent(id: number):Observable<Student>{
    const url=`${this.stuUrl}/${id}`;
    return this.http.get<Student>(url)
  }

  //修改
  updateStudent(student: Student): Observable<any>{
    return this.http.put(this.stuUrl+"/"+student.id,student)
  }
}
