import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdatemedicalhistoryPage } from './updatemedicalhistory.page';
var routes = [
    {
        path: '',
        component: UpdatemedicalhistoryPage
    }
];
var UpdatemedicalhistoryPageModule = /** @class */ (function () {
    function UpdatemedicalhistoryPageModule() {
    }
    UpdatemedicalhistoryPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdatemedicalhistoryPage]
        })
    ], UpdatemedicalhistoryPageModule);
    return UpdatemedicalhistoryPageModule;
}());
export { UpdatemedicalhistoryPageModule };
//# sourceMappingURL=updatemedicalhistory.module.js.map