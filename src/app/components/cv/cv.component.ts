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
  selectedReference: any;
  footer = cvData.footer;

  onSkillSelected(skill: string) {
    alert(`You clicked on: ${skill}`); //Shameful--change this fast
    
  }

  onReferenceSelected(reference: any) {
    this.selectedReference = reference;
  }
}
