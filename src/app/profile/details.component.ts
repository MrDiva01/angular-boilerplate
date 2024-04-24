import { Component } from '@angular/core';
<<<<<<< HEAD

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent {
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }
}
=======
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'details.component.html'})
export class DetailsComponent {
  account = this.accountService.accountValue;

  constructor(private accountService: AccountService) { }
}
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
