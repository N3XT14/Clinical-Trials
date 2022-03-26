import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var MedicalhistoryPage = /** @class */ (function () {
    function MedicalhistoryPage(router) {
        this.router = router;
    }
    MedicalhistoryPage.prototype.ngOnInit = function () {
    };
    MedicalhistoryPage.prototype.submit = function () {
        this.router.navigate(['triallist']);
    };
    MedicalhistoryPage = tslib_1.__decorate([
        Component({
            selector: 'app-medicalhistory',
            templateUrl: './medicalhistory.page.html',
            styleUrls: ['./medicalhistory.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], MedicalhistoryPage);
    return MedicalhistoryPage;
}());
export { MedicalhistoryPage };
//# sourceMappingURL=medicalhistory.page.js.map