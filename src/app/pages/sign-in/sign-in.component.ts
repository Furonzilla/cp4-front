import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
import { WindowService } from 'src/app/core/services/window.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private windowService: WindowService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.signin(this.loginForm.value).subscribe({
      next: (data: any) => {
        this.tokenService.saveUser(data);
        this.tokenService.saveTimer();
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/']).then(() => {
          this.windowService.window.location.reload();
        });
      },
      error: () => {
        this.isLoginFailed = true;
      },
    });
  }
}
