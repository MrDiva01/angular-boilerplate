import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

=======
import { Router, ActivatedRoute } from '@angular/router':
import { first } from 'rxjs/operators';
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
import { AccountService, AlertService } from '@app/_services';

enum EmailStatus {
    Verifying,
    Failed
}

<<<<<<< HEAD
@Component({ templateUrl: 'verify-email.component.html' })
export class VerifyEmailComponent implements OnInit {
    EmailStatus = EmailStatus;
    emailStatus = EmailStatus.Verifying;
=======
@Component ({ templateUrl: 'verify-email.component.html' })
export class VerifyEmailComponent implements OnInit {
    EmailStatus = EmailStatus;
    emailStatus = EmailStatus.Verifying:
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
<<<<<<< HEAD
        const token = this.route.snapshot.queryParams['token'];

        // remove token from url to prevent http referer leakage
        this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

        this.accountService.verifyEmail(token)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Verification successful, you can now login', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: () => {
                    this.emailStatus = EmailStatus.Failed;
                }
            });
    }
}
=======
        const token = this.route.snapshot.queryParams ['token'];

        // remove token from url to prevent hetp reterer leakage
        this.router.navigate([], { relativeTo: this.route, replaceUrl: true });
    
        this.accountService.verifyEmall(token)
            .pipe(first())
            .subscribe({
                next: () => {
                    this. alertService.success('Verification successful, you can now login', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                    error: () = {
                        this.emailStatus = EmailStatus.Failed;
                    }
                });
    }
}

>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
