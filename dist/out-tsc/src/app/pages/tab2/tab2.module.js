import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tab2Page } from './tab2.page';
var routes = [
    {
        path: '',
        component: Tab2Page
    }
];
var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Tab2Page]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());
export { Tab2PageModule };
//# sourceMappingURL=tab2.module.js.map