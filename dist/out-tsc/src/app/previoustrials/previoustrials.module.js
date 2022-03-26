import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PrevioustrialsPage } from './previoustrials.page';
var routes = [
    {
        path: '',
        component: PrevioustrialsPage
    }
];
var PrevioustrialsPageModule = /** @class */ (function () {
    function PrevioustrialsPageModule() {
    }
    PrevioustrialsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PrevioustrialsPage]
        })
    ], PrevioustrialsPageModule);
    return PrevioustrialsPageModule;
}());
export { PrevioustrialsPageModule };
//# sourceMappingURL=previoustrials.module.js.map