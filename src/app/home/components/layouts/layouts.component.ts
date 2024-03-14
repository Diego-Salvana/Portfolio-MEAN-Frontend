import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { layoutsMock } from '../../../shared/helpers/layoutsProjectMock';
import { LayoutProject } from 'src/app/shared/interfaces/layout-project.interface';

@Component({
   selector: 'app-layouts',
   templateUrl: './layouts.component.html',
   styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent implements AfterViewInit {
   @Input() isLogged$!: Observable<boolean>;
   @ViewChildren('layoutCard') layoutCards!: QueryList<ElementRef<HTMLElement>>;
   private intersectionObserver = new IntersectionObserver(this.showCard, { threshold: 0.4 });
   layoutProjectsMock: LayoutProject[] = layoutsMock;

   ngAfterViewInit(): void {
      this.layoutCards.forEach(({ nativeElement }) => this.intersectionObserver.observe(nativeElement));
   }

   showCard(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
      entries.forEach((el) => {
         if (el.isIntersecting) {
            el.target.classList.add('show');
            observer.unobserve(el.target);
         }
      });
   }
}
