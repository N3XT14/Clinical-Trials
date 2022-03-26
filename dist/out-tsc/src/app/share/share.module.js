import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharePage } from './share.page';
var routes = [
    {
        path: '',
        component: SharePage
    }
];
var SharePageModule = /** @class */ (function () {
    function SharePageModule() {
    }
    SharePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SharePage]
        })
    ], SharePageModule);
    return SharePageModule;
}());
export { SharePageModule };
//# sourceMappingURL=share.module.js.map