import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SpellService } from '../shared/spell.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spell-form',
  templateUrl: './spell-form.component.html',
  styleUrls: ['./spell-form.component.scss']
})
export class SpellFormComponent implements OnInit {
  handsFree: FormControl;
  spellPicked: FormControl;
  difficulty: string;
  spellCastSubscription: Subscription;
  spellList: string[] = [];
  
  constructor(private SpellService: SpellService) { 
    this.spellCastSubscription = SpellService.spellCastSource$.subscribe(
      spell => {
        this.spellList.push(spell);
    });
  }

  ngOnInit() {
    this.createForm();
    this.listenForChanges();
  }

  createForm() {
    this.handsFree = new FormControl('');
    this.spellPicked = new FormControl('');
  }

  listenForChanges() {
    this.handsFree.valueChanges.subscribe( val => {
      this.SpellService.handsPicked(this.handsFree.value);
    });
    this.spellPicked.valueChanges.subscribe( val => {
      this.SpellService.spellPicked(this.spellPicked.value);
    });
  }
}
