import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import { AccountsRoutingModule } from './accounts-routing.module';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

@NgModule({
=======
import { AccountsRoutingModule } from ' /accounts-routing module';
import {ListComponent } from './list. component';
import { AddEditComponent } from ' •/add-edit. component';

@NgModule ({
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountsRoutingModule
    ],
    declarations: [
        ListComponent,
        AddEditComponent
    ]
<<<<<<< HEAD
})
=======
})    
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
export class AccountsModule { }