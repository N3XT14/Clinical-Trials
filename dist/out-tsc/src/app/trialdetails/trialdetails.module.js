import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TrialdetailsPage } from './trialdetails.page';
var routes = [
    {
        path: '',
        component: TrialdetailsPage
    }
];
var TrialdetailsPageModule = /** @class */ (function () {
    function TrialdetailsPageModule() {
    }
    TrialdetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TrialdetailsPage]
        })
    ], TrialdetailsPageModule);
    return TrialdetailsPageModule;
}());
export { TrialdetailsPageModule };
//# sourceMappingURL=trialdetails.module.js.map