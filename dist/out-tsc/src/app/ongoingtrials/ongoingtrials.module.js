import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OngoingtrialsPage } from './ongoingtrials.page';
var routes = [
    {
        path: '',
        component: OngoingtrialsPage
    }
];
var OngoingtrialsPageModule = /** @class */ (function () {
    function OngoingtrialsPageModule() {
    }
    OngoingtrialsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OngoingtrialsPage]
        })
    ], OngoingtrialsPageModule);
    return OngoingtrialsPageModule;
}());
export { OngoingtrialsPageModule };
//# sourceMappingURL=ongoingtrials.module.js.map