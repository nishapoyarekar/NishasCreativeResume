
import { Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
})
export class ReferencesComponent {
  @Input() referenceList: any[] = [];
  @Output() referenceClicked = new EventEmitter<any>();
  
  // Track the currently selected reference for displaying more details
  selectedReference: any = null;

  // Function to toggle the display of additional details for a reference
  toggleReferenceDetails(reference: any) {
    // If the selected reference is already clicked, hide it
    if (this.selectedReference === reference) {
      this.selectedReference = null;
    } else {
      this.selectedReference = reference;
    }
  }

  onReferenceClick(reference: any) {
    this.referenceClicked.emit(reference);
  }
}



