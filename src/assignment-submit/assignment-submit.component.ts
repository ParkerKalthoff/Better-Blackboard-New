import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-assignment-submit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment-submit.component.html',
  styleUrl: './assignment-submit.component.css'
})


export class AssignmentSubmitComponent implements OnInit{
  constructor(private route: ActivatedRoute, private titleService: Title) { }

  isButtonDisabled: boolean = false;
  buttonText: string = "Submit Assignment"
  submissionTime: string = "Assignment Recieved at: ";
  successfulSubmission: boolean = false;
  AssignID:   string | null = "1";
  AssignName: string | null = null;
  AssignDate: string | null = null;

  tasks: Task[] = [
    {
      id: "1",
      title: "History Paper",
      dueDate: "3/1/2023",
    },
    {
      id: "2",
      title: "Module 5",
      dueDate: "3/2/2023",
    },
    {
      id: "3",
      title: "Extra Credit",
      dueDate: "3/2/2023",
    },
    {
      id: "4",
      title: "Assignment 2",
      dueDate: "3/3/2023",
    },
    {
      id: "5",
      title: "Assignment 3",
      dueDate: "3/3/2023",
    },
    {
      id: "6",
      title: "Assignment 4",
      dueDate: "3/4/2023",
    },
    {
      id: "7",
      title: "Assignment 5",
      dueDate: "3/5/2023",
    },
  ];

  submission(){
    window.alert("Assignment Recieved at: " + Date() + "\n\nEmail Confirmation Sent");
    this.successfulSubmission = true;
    this.submissionTime = "Assignment Recieved at: " + Date();
    this.buttonText = "Assignment Submitted";
    this.isButtonDisabled = true;
  }

    ngOnInit() {
      console.warn("Course id is:" + this.route.snapshot.paramMap.get('id'));
      this.AssignID = this.route.snapshot.paramMap.get('id');
      if (this.AssignID !== null) {
        const courseIdNumber = parseInt(this.AssignID);
        this.AssignName = this.tasks[courseIdNumber - 1]?.title;
        this.AssignDate = this.tasks[courseIdNumber - 1]?.dueDate;
      }
      if(this.AssignID !== null)
      this.setTitle("Submission - "+this.AssignName);
    }

    setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle);
    }
  }

  interface Task {
    title: string;
    id: string;
    dueDate: string;
  }
