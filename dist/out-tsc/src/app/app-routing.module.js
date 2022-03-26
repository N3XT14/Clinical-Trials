import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'medicalhistory', loadChildren: './medicalhistory/medicalhistory.module#MedicalhistoryPageModule' },
    { path: 'triallist', loadChildren: './triallist/triallist.module#TriallistPageModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'updatepersonaldetails', loadChildren: './updatepersonaldetails/updatepersonaldetails.module#UpdatepersonaldetailsPageModule' },
    { path: 'updatemedicalhistory', loadChildren: './updatemedicalhistory/updatemedicalhistory.module#UpdatemedicalhistoryPageModule' },
    { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
    { path: 'share', loadChildren: './share/share.module#SharePageModule' },
    { path: 'trialdetails', loadChildren: './trialdetails/trialdetails.module#TrialdetailsPageModule' },
    { path: 'hospital', loadChildren: './hospital/hospital.module#HospitalPageModule' },
    { path: 'previoustrials', loadChildren: './previoustrials/previoustrials.module#PrevioustrialsPageModule' },
    { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
    { path: 'ongoingtrials', loadChildren: './ongoingtrials/ongoingtrials.module#OngoingtrialsPageModule' },
    { path: 'trialcenters', loadChildren: './trialcenters/trialcenters.module#TrialcentersPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map