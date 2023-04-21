import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class SpinnerService {
   private isLoading = new BehaviorSubject<boolean>(false);
   isLoading$: Observable<boolean> = this.isLoading.asObservable();

   constructor() {}

   show(): void {
      this.isLoading.next(true);
   }

   hidden(): void {
      this.isLoading.next(false);
   }
}
