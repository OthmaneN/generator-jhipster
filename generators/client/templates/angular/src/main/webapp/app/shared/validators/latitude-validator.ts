import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';


@Directive({
    selector: '[latitude]',
    providers: [{provide: NG_VALIDATORS, useExisting: LatitudeValidatorDirective, multi: true}]
})
export class LatitudeValidatorDirective implements Validator {

    validate(c: FormControl): ValidationErrors {
        const latitudeValue = Number(c.value);
        const isValid = !isNaN(latitudeValue) && latitudeValue >= -85 && latitudeValue <= 85;
        const message = {
            'latitude': {
                'message': 'The latitude must be a valid number between -85 and 85'
            }
        };
        return isValid ? null : message;
    }
}
