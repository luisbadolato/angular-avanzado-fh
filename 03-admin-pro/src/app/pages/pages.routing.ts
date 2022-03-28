import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graph1Component } from "./graph1/graph1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { PromisesComponent } from "./promises/promises.component";
import { ReactiveComponent } from "./reactive/reactive.component";


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress Bar'} },
            { path: 'charts', component: Graph1Component, data: { title: 'Charts'} },
            { path: 'promises', component: PromisesComponent, data: { title: 'Promises'} },
            { path: 'reactive', component: ReactiveComponent, data: { title: 'RxJS'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account Settings'} }
        ]
    }
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}