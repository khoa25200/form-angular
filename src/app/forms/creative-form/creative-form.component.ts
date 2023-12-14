import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../shared/student';
import { ValidationService } from '../../shared/validation.service';

@Component({
  selector: 'app-creative-form',
  templateUrl: './creative-form.component.html',
  // styleUrls: ['./creative-form.component.css']
})
export class CreativeFormComponent implements OnInit {
  studentForm: FormGroup;
  model: Student;
  submittedModel: Student;
  subjects: string[];
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.model = new Student(
      18,
      'Dang Khoa',
      'OOP',
      'Music, Swim',
      'ngdakhoa@gmail.com'
    );

    this.subjects = [
      'OOP',
      'Risk Management',
      'Managing Cloud Security',
      'Emerging Technologies in Cybersecurity',
    ];

    this.studentForm = this.formBuilder.group({
      name: [this.model.name, Validators.required],
      skill: [this.model.skill, Validators.required],
      email: [
        this.model.email,
        [Validators.required, ValidationService.emailValidator],
      ],
      subject: [this.model.subject, Validators.required],
    });
  }
  onSubmit({ value, valid }: { value: Student; valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
}
