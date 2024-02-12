import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  student = {
    name: '',
    rollNo: '',
    grade: ''
  };

  onSubmit() {
    // Here you can handle the submission logic, like sending the data to the server or processing it further.
    console.log('Submitted student:', this.student);
    // Clear form fields after submission
    this.student = {
      name: '',
      rollNo: '',
      grade: ''
    };
  }

}
