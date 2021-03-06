import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataListComponent } from './pages/list/data-list/data-list.component';
import { ActionListComponent } from './pages/list/action-list/action-list.component';
import { StatusListComponent } from './pages/list/status-list/status-list.component';
import { MultiselectListComponent } from './pages/list/multiselect-list/multiselect-list.component';
import { BasicBottomSheetComponent } from './pages/overlays/basic-bottom-sheet/basic-bottom-sheet.component';
import { CollapsibleAppBarComponent } from './pages/app-bar/collapsible-app-bar/collapsible-app-bar.component';
import { ComplexBottomSheetComponent } from './pages/overlays/complex-bottom-sheet/complex-bottom-sheet.component';
import { SortableListComponent } from './pages/list/sortable-list/sortable-list.component';
import { SearchBarComponent } from './pages/app-bar/search-bar/search-bar.component';
import { ResponsiveTableComponent } from './pages/list/responsive-table/responsive-table.component';
import { DynamicStepperComponent } from './pages/dynamic-stepper/dynamic-stepper.component';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';
import { I18nComponent } from './pages/i18n/i18n.component';
import { LoadingStatesComponent } from './pages/loading-states/loading-states.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export type DrawerItem = {
    title: string;
    path: string;
    children?: DrawerItem[];
    component?: any;
    redirectTo?: string;
};

export const ROUTES: DrawerItem[] = [
    {
        title: 'App Bar',
        path: 'app-bar',
        children: [
            {
                title: 'Collapsible',
                path: 'collapsible',
                component: CollapsibleAppBarComponent,
            },
            {
                title: 'Search',
                path: 'search',
                component: SearchBarComponent,
            },
        ],
    },
    {
        title: 'Loading States',
        path: 'loading',
        component: LoadingStatesComponent,
    },
    {
        title: 'Form Validation',
        path: 'form-validation',
        component: FormValidationComponent,
    },
    {
        title: 'Internationalization',
        path: 'internationalization',
        component: I18nComponent,
    },
    {
        title: 'Lists',
        path: 'lists',
        children: [
            {
                title: 'Action List',
                path: 'action-list',
                component: ActionListComponent,
            },
            {
                title: 'Data List',
                path: 'data-list',
                component: DataListComponent,
            },
            {
                title: 'Multiselect List',
                path: 'multi-select-list',
                component: MultiselectListComponent,
            },
            {
                title: 'Sortable List',
                path: 'sortable-list',
                component: SortableListComponent,
            },
            {
                title: 'Status List',
                path: 'status-list',
                component: StatusListComponent,
            },
            {
                title: 'Responsive Table',
                path: 'responsive-table',
                component: ResponsiveTableComponent,
            },
        ],
    },
    {
        title: 'Overlays',
        path: 'overlays',
        children: [
            {
                title: 'Basic Bottom Sheet',
                path: 'basic-bottom-sheet',
                component: BasicBottomSheetComponent,
            },
            {
                title: 'Complex Bottom Sheet',
                path: 'complex-bottom-sheet',
                component: ComplexBottomSheetComponent,
            },
        ],
    },
    {
        title: 'Dynamic Stepper',
        path: 'dynamic-stepper',
        component: DynamicStepperComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot([
            ...ROUTES,
            {
                path: '',
                component: LandingPageComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
