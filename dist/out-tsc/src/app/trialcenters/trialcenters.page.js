import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var TrialcentersPage = /** @class */ (function () {
    function TrialcentersPage(router) {
        this.router = router;
    }
    TrialcentersPage.prototype.ngOnInit = function () {
    };
    TrialcentersPage.prototype.apply = function () {
        this.router.navigate(['hospital']);
    };
    TrialcentersPage = tslib_1.__decorate([
        Component({
            selector: 'app-trialcenters',
            templateUrl: './trialcenters.page.html',
            styleUrls: ['./trialcenters.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TrialcentersPage);
    return TrialcentersPage;
}());
export { TrialcentersPage };
//# sourceMappingURL=trialcenters.page.js.map