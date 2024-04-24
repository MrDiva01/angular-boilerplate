import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { MustMatch } from '@app/_helpers';

enum TokenStatus {
    Validating,
    Valid,
    Invalid
}

@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent implements OnInit {
<<<<<<< HEAD
    TokenStatus = TokenStatus;
    tokenStatus = TokenStatus.Validating;
    token = null;
    form: FormGroup;
=======
    tokenStatus = TokenStatus.Validating;
    token = null;
    form: UntypedFormGroup;
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    loading = false;
    submitted = false;

    constructor(
<<<<<<< HEAD
        private formBuilder: FormBuilder,
=======
        private formBuilder: UntypedFormBuilder,
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

<<<<<<< HEAD
    ngOnInit() {
        this.form = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
=======
        ngOnInit() {
            this.form = this.formBuilder.group({
                password: ['', [Validators.required, Validators.minLength(6)]],
                confirmPassword: ['', Validators.required],
            }, {
                validator: MustMatch('password', 'confirmPassword')
            });
        
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455

        const token = this.route.snapshot.queryParams['token'];

        // remove token from url to prevent http referer leakage
        this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

        this.accountService.validateResetToken(token)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.token = token;
                    this.tokenStatus = TokenStatus.Valid;
                },
                error: () => {
                    this.tokenStatus = TokenStatus.Invalid;
                }
            });
<<<<<<< HEAD
    }
=======
        }
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

<<<<<<< HEAD
    onSubmit() {
=======
    onSubmit()  {
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
<<<<<<< HEAD
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.resetPassword(this.token, this.f.password.value, this.f.confirmPassword.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Password reset successful, you can now login', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
=======
        if (this.form. invalid) {
            return;
        }
        this.loading = true;
        this.accountService.resetPassword(this.token, this.f.password.value, this.f.confirmPassword.value)
            .pipe (first())
            .subscribel({
                next: () => {
                    this.alertService.success('Password reset successful, you can now login', { keepAfterRouteChange: true }) ;
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                    error: error => {
                        this.alertService.error(error);
                        this.loading = false;
                }
            });
        }
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
}