import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reference } from '../components/references/references.model'; // Ensuring type safety

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  private selectedReferenceSubject = new BehaviorSubject<Reference | null>(null); 
  
  // Exposing the selected reference as an observable to components
  selectedReference$ = this.selectedReferenceSubject.asObservable();

  
  selectReference(reference: Reference) {
    console.log("I am in service!");
    this.selectedReferenceSubject.next(reference);
    
  }

  // deselect
  clearSelection() {
    console.log("I am out of service!");
    this.selectedReferenceSubject.next(null);
  }
}
