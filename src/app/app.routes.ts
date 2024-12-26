import { Routes } from '@angular/router';
import { FrontLayoutComponent } from './pages/front/front-layout.component';
import { LandingComponent } from './pages/front/landing/landing.component';
import { LoginComponent } from './pages/front/auth/login/login.component';
import { PanelLayoutComponent } from './pages/panel/panel-layout.component';
import { DashboardComponent } from './pages/panel/dashboard/dashboard.component';
import { FormLayoutsComponent } from './pages/panel/form-layouts/form-layouts.component';

export const routes: Routes = [
    {
        path: '',
        component: FrontLayoutComponent,
        children: [
            { path: '', component: LandingComponent },
        ]
    },
    {
        path: 'login',
        component: LoginComponent,

    },
    {
        path: 'panel',
        component: PanelLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'form-layouts', component: FormLayoutsComponent },
        ]
    },
];
