import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
=======
import { ListComponent } from ' /list. component' ;
import { AddEditComponent } from './add-edit. component';
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'add', component: AddEditComponent },
<<<<<<< HEAD
    { path: 'edit/:id', component: AddEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
=======
    { path: 'edit/:id', component: AddEditComponent}
];

@NgModule ( {
    imports: [RouterModule. forChild(routes)],
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    exports: [RouterModule]
})
export class AccountsRoutingModule { }