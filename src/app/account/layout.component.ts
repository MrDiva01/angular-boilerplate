import { Component } from '@angular/core';
import { Router } from '@angular/core';

import { AccountService } from '@angular/core';

@Component({ templateUrl: 'layout.component.html'})
export class LayoutComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        //redirect to home if already logged in 
        if(this.accountService.accountValue){
            this.router.navigate(['/']);
        }
    }
}

