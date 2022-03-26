import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var TrialdetailsPage = /** @class */ (function () {
    function TrialdetailsPage(router) {
        this.router = router;
    }
    TrialdetailsPage.prototype.ngOnInit = function () {
    };
    TrialdetailsPage.prototype.apply = function () {
        this.router.navigate(['trialcenters']);
    };
    TrialdetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-trialdetails',
            templateUrl: './trialdetails.page.html',
            styleUrls: ['./trialdetails.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TrialdetailsPage);
    return TrialdetailsPage;
}());
export { TrialdetailsPage };
//# sourceMappingURL=trialdetails.page.js.map