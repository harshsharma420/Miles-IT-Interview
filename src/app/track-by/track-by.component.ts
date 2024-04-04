import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss']
})
export class TrackByComponent {


  students = [
    {
      name: "Harsh Sharma",
      marks: 100
    },
    {
      name: "Harleen Kaur",
      marks: 50
    },
    {
      name: "Vikas Kanojiya",
      marks: 95
    }
  ];



  student = new FormGroup(
    {
      // id:new FormControl((this.students[this.students.length - 1].id )+ 1),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      marks: new FormControl(0, [Validators.required, Validators.pattern('[0-9]+$')])
    }
  );

  async addStudent() {
    if (this.student.valid) {
      // const id = this.student.get('id')?.value as number;
      const name = this.student.get('name')?.value as string;
      const marks = this.student.get('marks')?.value as number;

      // if (id !== null && name !== null && marks !== null) {
      const newStudent = { name, marks };
      this.students = await [...this.students, newStudent];
      console.log(this.students);
      await this.student.setValue({
        name: '',
        marks: 0
      });
      // }
    }
  }

  studentsTrackBy(index: any, students: any) {
    return students.name;
  }
}