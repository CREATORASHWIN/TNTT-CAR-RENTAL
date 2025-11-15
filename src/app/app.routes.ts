import { Routes } from '@angular/router';

// ✅ Import standalone components
import { CarGridComponent } from './components/car-grid/car-grid.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';

export const routes: Routes = [
  // ✅ Default → Home (Car Grid)
  { path: '', redirectTo: 'cars', pathMatch: 'full' },

  // ✅ Car listing page
  { path: 'cars', component: CarGridComponent },

  // ✅ Car details page (Dynamic slug)
  { path: 'car/:name', component: CarDetailsComponent },

  // ✅ Redirect all unknown paths
  { path: '**', redirectTo: 'cars' }
];