import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var TriallistPage = /** @class */ (function () {
    function TriallistPage(router) {
        this.router = router;
    }
    TriallistPage.prototype.ngOnInit = function () {
    };
    TriallistPage.prototype.profile = function () {
        this.router.navigate(['profile']);
    };
    TriallistPage.prototype.view = function () {
        this.router.navigate(['trialdetails']);
    };
    TriallistPage = tslib_1.__decorate([
        Component({
            selector: 'app-triallist',
            templateUrl: './triallist.page.html',
            styleUrls: ['./triallist.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TriallistPage);
    return TriallistPage;
}());
export { TriallistPage };
//# sourceMappingURL=triallist.page.js.map