<<<<<<< HEAD
﻿import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, finalize } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent implements OnInit {
    form: FormGroup;
=======
import { Component, OnInit } from '@angular/core':
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms',
import { first, finalize } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';

@Component ({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent implements OnInit {
    form: UntypedFormGroup;
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    loading = false;
    submitted = false;

    constructor(
<<<<<<< HEAD
        private formBuilder: FormBuilder,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
=======
        private formBuilder: UntypedFormBuilder,
        private accountService: AccountService,
        private alertService: AlertService
     ) { }

    ngOnInit () {
        this. form = this.formBuilder.group({
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
            email: ['', [Validators.required, Validators.email]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
<<<<<<< HEAD
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.alertService.clear();
        this.accountService.forgotPassword(this.f.email.value)
            .pipe(first())
            .pipe(finalize(() => this.loading = false))
=======
        if (this. form. invalid) {
            return;
    }
        this. loading = true;
        this.alertService.clear();
        this.accountService.forgotPassword(this.f.email.value)

            .pipe(first())
            .pipe(finalize(() => this. loading = false))
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
            .subscribe({
                next: () => this.alertService.success('Please check your email for password reset instructions'),
                error: error => this.alertService.error(error)
            });
<<<<<<< HEAD
    }
}
=======
        }
    }
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
