import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';
=======
import { Router } from '@angular/core';

import { AccountService } from '@angular/core';
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455

@Component({ templateUrl: 'layout.component.html'})
export class LayoutComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
<<<<<<< HEAD
        // redirect to home if already logged in
        if (this.accountService.accountValue) {
            this.router.navigate(['/']);
        }
    }
}
=======
        //redirect to home if already logged in 
        if(this.accountService.accountValue){
            this.router.navigate(['/']);
        }
    }
}

>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
