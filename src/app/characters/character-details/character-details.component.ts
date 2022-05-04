import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  characterId = 0;
  character$ = this.charactersService.character$;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.characterId = +params['id']));
    this.charactersService.setCharacterId(this.characterId);
  }

  back() {
    this.location.back();
  }
}
