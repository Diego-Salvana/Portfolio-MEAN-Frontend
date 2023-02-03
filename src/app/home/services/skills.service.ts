import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Skill } from '../interfaces/skill.interface';

@Injectable({
   providedIn: 'root',
})
export class SkillsService {
   private basaUrl: string = environment.baseUrl;

   constructor(private http: HttpClient) {}

   getSkills(): Observable<Skill[]> {
      return this.http.get<Skill[]>(`${this.basaUrl}/skills`);
   }
}
