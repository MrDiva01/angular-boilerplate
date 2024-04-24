import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

=======
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
import { AdminRoutingModule } from './admin-routing.module';
import { SubNavComponent } from './subnav.component';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview.component';

@NgModule({
<<<<<<< HEAD
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    declarations: [
        SubNavComponent,
        LayoutComponent,
        OverviewComponent
    ]
})
export class AdminModule { }
=======
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [
    SubNavComponent,
    LayoutComponent,
    OverviewComponent
  ]
})
export class AdminModule {}
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
