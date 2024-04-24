import { Component } from '@angular/core';
<<<<<<< HEAD

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }
}
=======
import { AccountService } from '@app/_services';

@Component({
  templateUrl: 'home.component.html'})
export class HomeComponent {
  account = this.accountService.accountValue;

  constructor(private accountService: AccountService) {}
}
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
