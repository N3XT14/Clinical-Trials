import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var UpdatepersonaldetailsPage = /** @class */ (function () {
    function UpdatepersonaldetailsPage(router) {
        this.router = router;
    }
    UpdatepersonaldetailsPage.prototype.ngOnInit = function () {
    };
    UpdatepersonaldetailsPage.prototype.submit = function () {
        this.router.navigate(['profile']);
    };
    UpdatepersonaldetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-updatepersonaldetails',
            templateUrl: './updatepersonaldetails.page.html',
            styleUrls: ['./updatepersonaldetails.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], UpdatepersonaldetailsPage);
    return UpdatepersonaldetailsPage;
}());
export { UpdatepersonaldetailsPage };
//# sourceMappingURL=updatepersonaldetails.page.js.map