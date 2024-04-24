import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
import { SubNavComponent } from './subnav.component';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview.component';

const accountsModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);
=======
import { SubNavComponent } from ' ./subnav. component';
import { LayoutComponent } from './layout. component';
import { OverviewComponent } from './overview.component';

const accountsModule = () => import('./accounts/accounts,module').then(x => x.AccountsModule);
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455

const routes: Routes = [
    { path: '', component: SubNavComponent, outlet: 'subnav' },
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: OverviewComponent },
            { path: 'accounts', loadChildren: accountsModule }
        ]
    }
];

<<<<<<< HEAD
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
=======
    @NgModule ({
        imports: [RouterModule. forChild(routes)],
        exports: [RouterModule]
    })

    export class AdminRoutingModule { }
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
