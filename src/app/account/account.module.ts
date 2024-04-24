<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { VerifyEmailComponent } from './verify-email.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
=======
import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import{ CommonModule } from '@angular/common';
import{ AccountRoutingModule } from ' •/account-routing-module';
import{ LayoutComponent } from './layout. component';
import{ LoginComponent } from '•/login. component';
import{ RegisterComponent } from '/register-component';
import{ VerifyEmailComponent } from './verify-email, component';
import{ ForgotPasswordComponent } from './forgot-password.component';
import{ ResetPasswordComponent } from ' /reset-password. component';

@NgModule ({
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        VerifyEmailComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent
    ]
})
<<<<<<< HEAD
=======

>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
export class AccountModule { }