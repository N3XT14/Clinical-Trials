import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HospitalPage } from './hospital.page';
var routes = [
    {
        path: '',
        component: HospitalPage
    }
];
var HospitalPageModule = /** @class */ (function () {
    function HospitalPageModule() {
    }
    HospitalPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HospitalPage]
        })
    ], HospitalPageModule);
    return HospitalPageModule;
}());
export { HospitalPageModule };
//# sourceMappingURL=hospital.module.js.map