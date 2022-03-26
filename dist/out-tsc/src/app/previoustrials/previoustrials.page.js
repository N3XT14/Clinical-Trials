import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var PrevioustrialsPage = /** @class */ (function () {
    function PrevioustrialsPage(router) {
        this.router = router;
    }
    PrevioustrialsPage.prototype.ngOnInit = function () {
    };
    PrevioustrialsPage.prototype.share = function () {
        this.router.navigate(['share']);
    };
    PrevioustrialsPage = tslib_1.__decorate([
        Component({
            selector: 'app-previoustrials',
            templateUrl: './previoustrials.page.html',
            styleUrls: ['./previoustrials.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], PrevioustrialsPage);
    return PrevioustrialsPage;
}());
export { PrevioustrialsPage };
//# sourceMappingURL=previoustrials.page.js.map