import {Component, Input} from '@angular/core';

@Component({
    selector: 'jhi-map-component',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css'],
})
export class MapComponent {
    @Input() lat;
    @Input() lng;
}
