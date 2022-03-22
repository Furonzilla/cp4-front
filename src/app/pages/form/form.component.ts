import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';
import { TokenService } from 'src/app/core/services/token.service';
import { WindowService } from 'src/app/core/services/window.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private ideaService: IdeaService
  ) {
    this.createForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formData: FormData = new FormData();
    formData.append('title', this.createForm.controls['title'].value);
    this.ideaService.createIdea(formData).subscribe(
      () => {this.router.navigate(['/']);}
    );
  }
}
