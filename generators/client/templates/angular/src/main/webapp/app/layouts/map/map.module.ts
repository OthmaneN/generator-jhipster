import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {AgmCoreModule} from '@agm/core'

@NgModule({
    imports: [AgmCoreModule.forRoot()],
    declarations: [MapComponent],
    exports: [MapComponent]
})
export class MapModule {
}
