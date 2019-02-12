import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

    // Observable string sources
    private spellSource = new Subject<string>();
    private difficultySource = new Subject<string>();
    private spellCastSource = new Subject<string>();
   
    // Observable string streams
    spellSource$ = this.spellSource.asObservable();
    difficultySource$ = this.difficultySource.asObservable();
    spellCastSource$ = this.spellCastSource.asObservable();
   
    // Service message commands
    spellPicked(spell: string) {
      this.spellSource.next(spell);
    }
   
    handsPicked(difficulty: string) {
      this.difficultySource.next(difficulty);
    }

    spellCast(spellCast: string) {
      this.spellCastSource.next(spellCast);
    }
}
