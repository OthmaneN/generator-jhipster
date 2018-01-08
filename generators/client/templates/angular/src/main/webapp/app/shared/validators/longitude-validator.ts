import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';


@Directive({
    selector: '[longitude]',
    providers: [{provide: NG_VALIDATORS, useExisting: LongitudeValidatorDirective, multi: true}]
})
export class LongitudeValidatorDirective implements Validator {

    validate(c: FormControl): ValidationErrors {
        const longitudeValue = Number(c.value);
        const isValid = !isNaN(longitudeValue) && longitudeValue >= -180 && longitudeValue <= 180;
        const message = {
            'longitude': {
                'message': 'The longitude must be a valid number between -180 and 180'
            }
        };
        return isValid ? null : message;
    }
}
