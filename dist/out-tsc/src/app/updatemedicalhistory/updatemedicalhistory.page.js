import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UpdatemedicalhistoryPage = /** @class */ (function () {
    function UpdatemedicalhistoryPage(router) {
        this.router = router;
    }
    UpdatemedicalhistoryPage.prototype.ngOnInit = function () {
    };
    UpdatemedicalhistoryPage.prototype.submit = function () {
        this.router.navigate(['profile']);
    };
    UpdatemedicalhistoryPage = tslib_1.__decorate([
        Component({
            selector: 'app-updatemedicalhistory',
            templateUrl: './updatemedicalhistory.page.html',
            styleUrls: ['./updatemedicalhistory.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdatemedicalhistoryPage);
    return UpdatemedicalhistoryPage;
}());
export { UpdatemedicalhistoryPage };
//# sourceMappingURL=updatemedicalhistory.page.js.map