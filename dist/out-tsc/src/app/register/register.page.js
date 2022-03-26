import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(router) {
        this.router = router;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.next = function () {
        console.log(this.fullname);
        console.log(this.address);
        console.log(this.pincode);
        console.log(this.contactno);
        console.log(this.email);
        console.log(this.aadhar);
        this.router.navigate(['medicalhistory']);
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map