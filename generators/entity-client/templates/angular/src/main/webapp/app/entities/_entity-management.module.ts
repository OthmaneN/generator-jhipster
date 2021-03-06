<%#
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see http://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-%>
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {FormsModule} from '@angular/forms';
import {MapComponent} from '../../layouts/map/map.component';
import {BrowserModule} from '@angular/platform-browser';
import {API_KEY} from '../../shared/constants/map.constants';
import {MapModule} from '../../layouts/map/map.module';

import { <%= angularXAppName %>SharedModule } from '../../shared';
<%_ Object.keys(differentRelationships).forEach(key => {
       if (key === 'User') { _%>
import { <%= angularXAppName %>AdminModule } from '../../admin/admin.module';
<%_ }}); _%>
import {
    <%= entityAngularName %>Service,
    <%= entityAngularName %>PopupService,
    <%= entityAngularName %>Component,
    <%= entityAngularName %>DetailComponent,
    <%= entityAngularName %>DialogComponent,
    <%= entityAngularName %>PopupComponent,
    <%= entityAngularName %>DeletePopupComponent,
    <%= entityAngularName %>DeleteDialogComponent,
    <%= entityInstance %>Route,
    <%= entityInstance %>PopupRoute,
    <%_ if (pagination === 'pagination' || pagination === 'pager') { _%>
    <%= entityAngularName %>ResolvePagingParams,
    <%_ } _%>
} from './';

import {LatitudeValidatorDirective} from '../../shared/validators/latitude-validator';
import {LongitudeValidatorDirective} from '../../shared/validators/longitude-validator';

const ENTITY_STATES = [
    ...<%= entityInstance %>Route,
    ...<%= entityInstance %>PopupRoute,
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        <%_ Object.keys(differentRelationships).forEach(key => {
              if (key === 'User') { _%>
        <%= angularXAppName %>AdminModule,
        <%_ }}); _%>
        RouterModule.forChild(ENTITY_STATES),
        BrowserModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
        apiKey: API_KEY
        }),
        MapModule
    ],
    declarations: [
        <%= entityAngularName %>Component,
        <%= entityAngularName %>DetailComponent,
        <%= entityAngularName %>DialogComponent,
        <%= entityAngularName %>DeleteDialogComponent,
        <%= entityAngularName %>PopupComponent,
        <%= entityAngularName %>DeletePopupComponent,
        LatitudeValidatorDirective,
        LongitudeValidatorDirective
    ],
    entryComponents: [
        <%= entityAngularName %>Component,
        <%= entityAngularName %>DialogComponent,
        <%= entityAngularName %>PopupComponent,
        <%= entityAngularName %>DeleteDialogComponent,
        <%= entityAngularName %>DeletePopupComponent,
    ],
    bootstrap: [MapComponent],
    providers: [
        <%= entityAngularName %>Service,
        <%= entityAngularName %>PopupService,
        <%_ if (pagination === 'pagination' || pagination === 'pager') { _%>
        <%= entityAngularName %>ResolvePagingParams,
        <%_ } _%>
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %><%= entityAngularName %>Module {}
