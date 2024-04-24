import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

=======
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
import { ProfileRoutingModule } from './profile-routing.module';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';
import { UpdateComponent } from './update.component';

@NgModule({
<<<<<<< HEAD
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProfileRoutingModule
    ],
    declarations: [
        LayoutComponent,
        DetailsComponent,
        UpdateComponent
    ]
})
export class ProfileModule { }
=======
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ],
  declarations: [
    LayoutComponent,
    DetailsComponent,
    UpdateComponent
  ]
})
export class ProfileModule {}
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
