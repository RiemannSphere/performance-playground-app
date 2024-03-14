import { Routes } from '@angular/router';
import { ManyItemsComponent } from './many-items/many-items.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

export const routes: Routes = [
    {
        component: ManyItemsComponent,
        path: 'many-items'
    },
    {
        component: ChangeDetectionComponent,
        path: 'change-detection'
    },
    {
        path: '**',
        redirectTo: 'many-items'
    }
];
