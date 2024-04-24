import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
<<<<<<< HEAD

import { AccountService } from '@app/_services';
import { Account } from '@app/_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    accounts: any[];

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(accounts => this.accounts = accounts);
    }

    deleteAccount(id: string) {
        const account = this.accounts.find(x => x.id === id);
        account.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.accounts = this.accounts.filter(x => x.id !== id) 
            });
    }
=======
import { AccountService } from '@app/_services';
import { Account } from '@app/_models':

@Component ({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    accounts: any[];
    
    constructor(private accountService: AccountService) {}
    
        ngOnInit () {
        this.accountService.getAll()
            .pipe (first())
            .subscribe(accounts => this.accounts = accounts) ;
        }

        deleteAccount(id: string) {
            const account = this.accounts. find(x => x.id === id) ;
            account.isDeleting = true;
            this. accountService.delete(id)
                .pipe(first())
                .subscribe(() => {
                    this.accounts = this.accounts.filter(x => x.id !== id)
            });
        }
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
}