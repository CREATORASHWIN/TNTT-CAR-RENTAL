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
    { name: 'Nissan Patrol', price: 360, image: 'patrol.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },

    // ✅ MISSING GRID CARS ADDED
    { name: 'Toyota Land Cruiser', price: 420, image: 'landcruiser.jpg', seats: 7, bags: 5, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Rolls Royce', price: 1500, image: 'rolls-royce.jpg', seats: 4, bags: 2, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Mercedes Viano', price: 500, image: 'viano.jpg', seats: 7, bags: 5, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Mercedes S-Class', price: 900, image: 'sclass.jpg', seats: 4, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'BMW 7 Series', price: 850, image: 'bmw7.jpg', seats: 4, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Nissan Altima', price: 140, image: 'altima.jpg', seats: 5, bags: 2, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Audi A6', price: 380, image: 'a6.jpg', seats: 5, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },

    // ✅ YOUR EXISTING LIST
    { name: 'Toyota Corolla', price: 120, image: 'corolla.jpg', seats: 5, bags: 2, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'BMW X5', price: 450, image: 'bmw.jpg', seats: 5, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Kia Carnival', price: 380, image: 'kia-carnival.jpg', seats: 7, bags: 5, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Odyssey Sedona', price: 400, image: 'odyssey-sedona.jpg', seats: 7, bags: 5, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Mercedes GLE', price: 500, image: 'mercedes-gle.jpg', seats: 5, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Audi Q7', price: 480, image: 'audi-q7.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Honda CR-V', price: 200, image: 'crv.jpg', seats: 5, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Hyundai Tucson', price: 180, image: 'tucson.jpg', seats: 5, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Ford Explorer', price: 350, image: 'explorer.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Chevrolet Tahoe', price: 370, image: 'tahoe.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Range Rover Evoque', price: 450, image: 'evoque.jpg', seats: 5, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Lexus RX', price: 460, image: 'lexus-rx.jpg', seats: 5, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Jeep Grand Cherokee', price: 390, image: 'grandcherokee.jpg', seats: 5, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Toyota Camry', price: 140, image: 'camry.jpg', seats: 5, bags: 2, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Honda Accord', price: 150, image: 'accord.jpg', seats: 5, bags: 2, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Volkswagen Touareg', price: 410, image: 'touareg.jpg', seats: 5, bags: 3, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Mazda CX-9', price: 220, image: 'cx9.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Kia Sorento', price: 200, image: 'sorento.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },

    // ✅ NEWLY ADDED TOYOTA VEHICLES
    { name: 'Toyota Previa', price: 300, image: 'toyota-previa.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Toyota Fortuner', price: 260, image: 'toyota-fortuner.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Toyota HiAce', price: 280, image: 'toyota-hiace.jpg', seats: 13, bags: 6, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Toyota Innova', price: 240, image: 'toyota-innova.jpg', seats: 7, bags: 4, fuel: 'Petrol', transmission: 'Automatic' },

    // ✅ LIMOUSINES (UPDATED: added BOTH names so slug works even if grid uses "Lincoln Limo")
    { name: 'Lincoln Limo', price: 900, image: 'lincoln-limo.jpg', seats: 18, bags: 6, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Lincoln Navigator Limousine', price: 900, image: 'lincoln-limo.jpg', seats: 18, bags: 6, fuel: 'Petrol', transmission: 'Automatic' },

    { name: 'Hummer Limo', price: 1100, image: 'hummer-limo.jpg', seats: 20, bags: 6, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Escalade Limo', price: 1200, image: 'escalade-limo.jpg', seats: 20, bags: 8, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'Chrysler Limo', price: 950, image: 'chrysler-limo.jpg', seats: 18, bags: 6, fuel: 'Petrol', transmission: 'Automatic' },
    { name: 'GMC Yukon Limo', price: 1000, image: 'yukon-limo.jpg', seats: 18, bags: 6, fuel: 'Petrol', transmission: 'Automatic' }
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