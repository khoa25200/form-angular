import { Component, OnInit } from '@angular/core';
import { Student } from '../../shared/student';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  // styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model: Student;
  subjects: string[];
  submitted: boolean = false;

  constructor() {}

  ngOnInit() {
    this.model = new Student(18, 'Dang Khoa', 'OOP', 'Music, Swim');

    this.subjects = [
      'OOP',
      'Risk Management',
      'Managing Cloud Security',
      'Emerging Technologies in Cybersecurity',
    ];
  }

  onSubmit() {
    this.submitted = true;
  }
}
