import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
<<<<<<< HEAD
import { VerifyEmailComponent } from './verify-email.component';
=======
import { VerifyingEmailComponent } from './verify-email.component';
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
import { ForgotPasswordComponent } from './forgot-password.component';
import { ResetPasswordComponent } from './reset-password.component';

const routes: Routes = [
<<<<<<< HEAD
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'verify-email', component: VerifyEmailComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'reset-password', component: ResetPasswordComponent }
        ]
    }
];
=======
     {
        path: '', component: LayoutComponent,
        children: [

            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'verify-email', component: VerifyingEmailComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent},
            {path: 'reset-password', component: ResetPasswordComponent},

        ]
     }
    ];
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
<<<<<<< HEAD
export class AccountRoutingModule { }
=======
export class AccountRoutingModule { }
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
