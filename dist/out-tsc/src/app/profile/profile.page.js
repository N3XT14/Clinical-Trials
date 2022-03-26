import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(router) {
        this.router = router;
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.updateprofile = function () {
        this.router.navigate(['updatepersonaldetails']);
    };
    ProfilePage.prototype.updatemedicalhistory = function () {
        this.router.navigate(['updatemedicalhistory']);
    };
    ProfilePage.prototype.ongoing = function () {
        this.router.navigate(['ongoingtrials']);
    };
    ProfilePage.prototype.prev = function () {
        this.router.navigate(['previoustrials']);
    };
    ProfilePage.prototype.trialist = function () {
        this.router.navigate(['triallist']);
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map