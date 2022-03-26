import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tab1Page } from './tab1.page';
var routes = [
    {
        path: '',
        component: Tab1Page
    }
];
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Tab1Page]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());
export { Tab1PageModule };
//# sourceMappingURL=tab1.module.js.map