import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdatepersonaldetailsPage } from './updatepersonaldetails.page';
var routes = [
    {
        path: '',
        component: UpdatepersonaldetailsPage
    }
];
var UpdatepersonaldetailsPageModule = /** @class */ (function () {
    function UpdatepersonaldetailsPageModule() {
    }
    UpdatepersonaldetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdatepersonaldetailsPage]
        })
    ], UpdatepersonaldetailsPageModule);
    return UpdatepersonaldetailsPageModule;
}());
export { UpdatepersonaldetailsPageModule };
//# sourceMappingURL=updatepersonaldetails.module.js.map