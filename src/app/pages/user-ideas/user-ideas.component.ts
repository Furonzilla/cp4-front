import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/core/models/Idea.model';
import { IdeaService } from 'src/app/core/services/idea.service';

@Component({
  selector: 'app-user-ideas',
  templateUrl: './user-ideas.component.html',
  styleUrls: ['./user-ideas.component.sass']
})
export class UserIdeasComponent implements OnInit {
  ideas?: Idea[];

  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    this.ideaService.getIdeasOfCurrentuser().subscribe(
      (data) => {this.ideas = data}
    )
  }
}
