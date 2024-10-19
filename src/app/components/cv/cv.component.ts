import { Component, OnInit } from '@angular/core';
import {cvData} from '../../data/cv-data';
import { Reference } from '../references/references.model';
import { ReferenceService } from 'src/app/services/reference.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit{
  header = cvData.header;
  experience = cvData.experience;
  skills = cvData.skills;
  education = cvData.education;
  references: Reference []= cvData.references;
  selectedReference: Reference | null = null;
  footer = cvData.footer;

  constructor(private referenceService: ReferenceService) {}

  onSkillSelected(skill: string) {
    alert(`You clicked on: ${skill}`); //Shameful--change this fast
    
  }

  onReferenceSelected(reference: Reference) {
    this.selectedReference = reference;
    console.log("WHATTT:"+reference.rname);
  }
  ngOnInit(){
  
    this.referenceService.selectedReference$.subscribe(reference => {
      this.selectedReference = reference;
    });
  }
}
