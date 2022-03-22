import { Component, Input, OnInit } from '@angular/core';
import { Idea } from 'src/app/core/models/Idea.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.sass']
})
export class IdeaCardComponent implements OnInit {
  @Input() ideas?: Idea[];
  pictureUrl = `${environment.backUrl}files/pictures/`;

  constructor() { }

  ngOnInit(): void {
  }

}
