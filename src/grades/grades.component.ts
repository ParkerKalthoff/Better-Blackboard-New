import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent implements OnInit{
  constructor(private route: ActivatedRoute, private titleService: Title) { }

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

  assignmentsArray: Assignments[] = [
    {
      id: '1',
      name: 'Assignment 1',
      dueDate: '2023-12-15',
      grade: 85,
      total: 100
    },
    {
      id: '2',
      name: 'Assignment 2',
      dueDate: '2023-12-20',
      grade: 92,
      total: 100
    },
    {
      id: '3',
      name: 'Assignment 3',
      dueDate: '2023-12-25',
      grade: 78,
      total: 100
    },
    {
      id: '4',
      name: 'Assignment 4',
      dueDate: '2023-12-30',
      grade: 95,
      total: 100
    },
    {
      id: '5',
      name: 'Assignment 5',
      dueDate: '2024-01-05',
      grade: 88,
      total: 100
    },
    {
      id: '6',
      name: 'Assignment 6',
      dueDate: '2024-01-10',
      grade: 90,
      total: 120
    }
  ];

  courseId: string | null = "1";
  courseName: string | null = "courseName";
  courseProfessor: string | null = null;
  myAverageGrade: string | null = null;

  ngOnInit() {
    console.warn("Course id is:" + this.route.snapshot.paramMap.get('course-id'));
    this.courseId = this.route.snapshot.paramMap.get('course-id');
    if (this.courseId !== null) {
      const courseIdNumber = parseInt(this.courseId);
      this.courseName = this.classes[courseIdNumber - 1]?.className;
      this.courseProfessor = this.classes[courseIdNumber - 1]?.name;
    }
    if(this.courseName !== null)
    this.setTitle("NDSU " + this.courseName + " Grades");

    this.myAverageGrade = this.averageGrade();
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  averageGrade(): string {
    let totalGrades = 0;
    let totalTotal = 0;

    for (const assignment of this.assignmentsArray) {
      totalGrades += assignment.grade;
    }
    for (const assignment of this.assignmentsArray) {
      totalTotal += assignment.total;
    }

    return  (( totalGrades / totalTotal ) * 100).toFixed(2)  + "%";
  }
}

interface Classes {
  id: number;
  name: string;
  className: string;
}

interface Assignments {
  id: string;
  name: string;
  dueDate: string;
  grade: number;
  total: number;
}