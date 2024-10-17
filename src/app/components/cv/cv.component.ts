import { Component } from '@angular/core';
import {cvData} from '../../data/cv-data';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  header = cvData.header;
  experience = cvData.experience;
  skills = cvData.skills;
  education = cvData.education;
  references = cvData.references;
  footer = cvData.footer;

  onSkillSelected(skill: string) {
    alert(`You clicked on: ${skill}`);
    
  }
}
