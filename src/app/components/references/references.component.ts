
import { Component, Input, Output,EventEmitter} from '@angular/core';
import { Reference } from './references.model';
import { ReferenceService } from 'src/app/services/reference.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
})
export class ReferencesComponent {
  @Input() referenceList: Reference[] = [];;
  @Output() referenceClicked = new EventEmitter<any>();

  constructor(private referenceService: ReferenceService) {}
  
  // Track the currently selected reference for displaying more details
  selectedReference: Reference | null = null;

 
  toggleReferenceDetails(reference: Reference) {
    
    if (this.selectedReference === reference) {
      this.selectedReference = null;
    } else {
      this.selectedReference = reference;
      
    }
    this.referenceService.selectReference(reference);
  }

  onReferenceClick(reference: any) {
    this.referenceClicked.emit(reference);
  }
}



