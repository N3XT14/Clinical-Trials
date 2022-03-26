import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var OngoingtrialsPage = /** @class */ (function () {
    function OngoingtrialsPage(router) {
        this.router = router;
    }
    OngoingtrialsPage.prototype.ngOnInit = function () {
    };
    OngoingtrialsPage.prototype.cancel = function () {
        console.log('hello');
    };
    OngoingtrialsPage.prototype.view = function () {
        console.log('hello');
    };
    OngoingtrialsPage = tslib_1.__decorate([
        Component({
            selector: 'app-ongoingtrials',
            templateUrl: './ongoingtrials.page.html',
            styleUrls: ['./ongoingtrials.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], OngoingtrialsPage);
    return OngoingtrialsPage;
}());
export { OngoingtrialsPage };
//# sourceMappingURL=ongoingtrials.page.js.map