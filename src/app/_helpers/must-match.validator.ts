<<<<<<< HEAD
import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
=======
import { UntypedFormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
   return (formGroup: UntypedFormGroup) => {
       const control = formGroup.controls[controlName];
       const matchingControl = formGroup.controls[matchingControlName];

       if (matchingControl.errors && !matchingControl.errors.mustMatch) {
           // return if another validator has already found an error on the matchingControl
           return;
       }

       // set error on matchingControl if validation fails
       if (control.value !== matchingControl.value) {
           matchingControl.setErrors({ mustMatch: true });
       } else {
           matchingControl.setErrors(null);
       }
   }
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
}