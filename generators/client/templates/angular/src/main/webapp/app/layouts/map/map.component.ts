import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MouseEvent} from '@agm/core';

@Component({
    selector: 'jhi-map-component',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css'],
})
export class MapComponent {
    @Input() centerLat;
    @Input() centerLng;
    @Input() markerLat;
    @Input() markerLng;
    @Input() isEditingMap;

    @Output() propagateNewCoordinatesEvent = new EventEmitter();

    mapClicked($event: MouseEvent) {
        this.updateMarkerCoords($event.coords)
    }

    dragEnded(param: {}, $event) {
        this.updateMarkerCoords($event.coords)
    }

    updateMarkerCoords(coords) {
        if (this.isEditingMap) {
            this.markerLat = coords.lat;
            this.markerLng = coords.lng;

            this.propagateNewCoordinatesEvent.emit({
                lat: this.markerLat,
                lng: this.markerLng
            })
        }
    }
}
