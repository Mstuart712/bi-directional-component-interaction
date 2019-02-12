import { Component, OnInit } from '@angular/core';
import { SpellService } from '../shared/spell.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-caster',
  templateUrl: './caster.component.html',
  styleUrls: ['./caster.component.scss']
})
export class CasterComponent implements OnInit {
  difficulty = 'No Difficulty Selected';
  spell = 'No Spell Selected';
  handSubscription: Subscription;
  spellSubscription: Subscription;
  
  constructor(private SpellService: SpellService) { 
    this.handSubscription = SpellService.difficultySource$.subscribe(
      difficulty => {
        this.difficulty = difficulty;
    });

    this.spellSubscription = SpellService.spellSource$.subscribe(
      spell => {
        this.spell = spell;
    });
  }

  ngOnInit() {
  }

  castSpell() {
    this.SpellService.spellCast("Mage cast a " + this.difficulty + " " + this.spell);
  }

}
