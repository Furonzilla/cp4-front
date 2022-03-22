import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/core/models/Idea.model';
import { IdeaService } from 'src/app/core/services/idea.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
})
export class HomepageComponent implements OnInit {
  ideas?: Idea[];

  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    this.ideaService.getIdeas().subscribe(
      (data) => {this.ideas = data}
    )
  }
}
