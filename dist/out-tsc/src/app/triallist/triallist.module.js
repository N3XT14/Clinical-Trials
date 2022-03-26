import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TriallistPage } from './triallist.page';
var routes = [
    {
        path: '',
        component: TriallistPage
    }
];
var TriallistPageModule = /** @class */ (function () {
    function TriallistPageModule() {
    }
    TriallistPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TriallistPage]
        })
    ], TriallistPageModule);
    return TriallistPageModule;
}());
export { TriallistPageModule };
//# sourceMappingURL=triallist.module.js.map