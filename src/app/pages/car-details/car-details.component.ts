import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {

  car: any = null;

  // ✅ FULL CAR LIST UPDATED (NOW INCLUDES YOUR GRID CARS ALSO)
  cars = [
    // ✅ GRID + DETAILS
   { name: 'Nissan Patrol', price: 1200, image: 'patrol.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Toyota Land Cruiser', price: 950, image: 'landcruiser.jpg', seats: 7, bags: 5, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Rolls Royce', price: 1000, image: 'rolls-royce.jpg', seats: 4, bags: 2, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Mercedes Viano', price: 800, image: 'viano.jpg', seats: 7, bags: 5, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Mercedes S-Class', price: 700, image: 'sclass.jpg', seats: 4, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'BMW 7 Series', price: 850, image: 'bmw7.jpg', seats: 4, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Nissan Altima', price: 400, image: 'altima.jpg', seats: 5, bags: 2, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Audi A6', price: 650, image: 'a6.jpg', seats: 5, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },

  { name: 'Kia Carnival', price: 500, image: 'kia-carnival.jpg', seats: 7, bags: 5, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Odyssey Sedona', price: 450, image: 'odyssey-sedona.jpg', seats: 7, bags: 5, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Toyota Previa', price: 400, image: 'toyota-previa.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Toyota HiAce', price: 500, image: 'toyota-hiace.jpg', seats: 13, bags: 6, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Toyota Innova', price: 400, image: 'toyota-innova.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Toyota Fortuner', price: 600, image: 'toyota-fortuner.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },

  { name: 'Lincoln Limo', price: 1250, image: 'lincoln-limo.jpg', seats: 18, bags: 6, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Hummer Limo', price: 1250, image: 'hummer-limo.jpg', seats: 20, bags: 6, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Escalade Limo', price: 1350, image: 'escalade-limo.jpg', seats: 20, bags: 8, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'Chrysler Limo', price: 1250, image: 'chrysler-limo.jpg', seats: 18, bags: 6, fuel: 'Petrol', transmission: 'Automatic' },
  { name: 'GMC Yukon Limo', price: 1250, image: 'yukon-limo.jpg', seats: 18, bags: 6, fuel: 'Petrol', transmission: 'Automatic' }
];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('name');

    // ✅ more reliable slug match (handles multiple spaces)
    this.car = this.cars.find(
      (c) => c.name.toLowerCase().trim().replace(/\s+/g, '-') === slug
    );
  }
}