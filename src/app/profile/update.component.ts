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

@Component({ templateUrl: 'update.component.html' })
export class UpdateComponent implements OnInit {
    account = this.accountService.accountValue;
<<<<<<< HEAD
    form: FormGroup;
=======
    form: UntypedFormGroup;
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    loading = false;
    submitted = false;
    deleting = false;

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

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: [this.account.title, Validators.required],
            firstName: [this.account.firstName, Validators.required],
            lastName: [this.account.lastName, Validators.required],
            email: [this.account.email, [Validators.required, Validators.email]],
            password: ['', [Validators.minLength(6)]],
            confirmPassword: ['']
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

<<<<<<< HEAD
    // convenience getter for easy access to form fields
=======
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

<<<<<<< HEAD
        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
=======
        this.alertService.clear();

>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.update(this.account.id, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Update successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    onDelete() {
        if (confirm('Are you sure?')) {
            this.deleting = true;
            this.accountService.delete(this.account.id)
                .pipe(first())
                .subscribe(() => {
                    this.alertService.success('Account deleted successfully', { keepAfterRouteChange: true });
                });
        }
    }
}