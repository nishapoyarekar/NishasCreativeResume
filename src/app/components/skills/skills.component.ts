import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent{

  @Input() skillSet: any;
  @Output() skillClicked = new EventEmitter<string>();

  onSkillClick(skill: string) {
    this.skillClicked.emit(skill);
  }
}
