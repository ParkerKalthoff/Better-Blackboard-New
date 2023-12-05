import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }

  classes: Classes[] = [
    {
      id: 1,
      name: "Eva Evans",
      className: "Math 166",
    },
    {
      id: 2,
      name: "David Davis",
      className: "Csci 160",
    },
    {
      id: 3,
      name: "Cathy Clark",
      className: "Eng 320",
    },
    {
      id: 4,
      name: "Bob Brown",
      className: "Csci 428",
    },
    {
      id: 5,
      name: "Alice Adams",
      className: "Psyc 111",
    },
    {
      id: 6,
      name: "Joe Johnson",
      className: "Hist 101",
    },
  ];
  
  courseId: string | null = "1";
  courseName: string | null = null;
  courseProfessor: string | null = null;

  ngOnInit() {
    console.warn("Course id is:" + this.route.snapshot.paramMap.get('course-id'));
    this.courseId = this.route.snapshot.paramMap.get('course-id');
    if (this.courseId !== null) {
      const courseIdNumber = parseInt(this.courseId);
      this.courseName = this.classes[courseIdNumber - 1]?.className;
      this.courseProfessor = this.classes[courseIdNumber - 1]?.name;
    }
  }

}

interface Classes {
  id: number;
  name: string;
  className: string;
}