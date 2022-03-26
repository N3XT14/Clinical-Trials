import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TrialcentersPage } from './trialcenters.page';
var routes = [
    {
        path: '',
        component: TrialcentersPage
    }
];
var TrialcentersPageModule = /** @class */ (function () {
    function TrialcentersPageModule() {
    }
    TrialcentersPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TrialcentersPage]
        })
    ], TrialcentersPageModule);
    return TrialcentersPageModule;
}());
export { TrialcentersPageModule };
//# sourceMappingURL=trialcenters.module.js.map