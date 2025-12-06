import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-grid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-grid.component.html',
  styleUrls: ['./car-grid.component.css']
})
export class CarGridComponent {

  constructor(private router: Router) {}

  cars = [
    { name: 'Nissan Patrol', price: 300, image: 'patrol.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 360, extraHourPrice: 65 } },

    /* ADDED NEW CARS */
    { name: 'Rolls Royce', price: 1000, image: 'rolls-royce.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Luxury', rental: { baseHours: 10, basePrice: 1500, extraHourPrice: 200 } },
    { name: 'Mercedes Viano', price: 500, image: 'viano.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Van', rental: { baseHours: 10, basePrice: 500, extraHourPrice: 80 } },
    { name: 'Mercedes S-Class', price: 850, image: 'sclass.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Luxury', rental: { baseHours: 10, basePrice: 900, extraHourPrice: 120 } },
    { name: 'BMW 7 Series', price: 850, image: 'bmw7.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Luxury', rental: { baseHours: 10, basePrice: 850, extraHourPrice: 110 } },
    { name: 'Nissan Altima', price: 120, image: 'altima.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Sedan', rental: { baseHours: 10, basePrice: 140, extraHourPrice: 50 } },
    { name: 'Audi A6', price: 250, image: 'a6.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Luxury', rental: { baseHours: 10, basePrice: 380, extraHourPrice: 70 } },

    /* VAN MODELS KEPT */
    { name: 'Kia Carnival', price: 350, image: 'kia-carnival.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Van', rental: { baseHours: 10, basePrice: 380, extraHourPrice: 70 } },
    { name: 'Odyssey Sedona', price: 300, image: 'odyssey-sedona.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Van', rental: { baseHours: 10, basePrice: 400, extraHourPrice: 75 } },
    { name: 'Toyota Previa', price: 300, image: 'toyota-previa.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Van', rental: { baseHours: 10, basePrice: 350, extraHourPrice: 60 } },
    { name: 'Toyota HiAce', price: 250, image: 'toyota-hiace.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Van', rental: { baseHours: 10, basePrice: 380, extraHourPrice: 70 } },
    { name: 'Toyota Innova', price: 200, image: 'toyota-innova.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Van', rental: { baseHours: 10, basePrice: 320, extraHourPrice: 55 } },

    /* LUXURY SUV KEPT */
    { name: 'Toyota Land Cruiser', price: 320, image: 'landcruiser.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 420, extraHourPrice: 70 } },
    { name: 'Toyota Fortuner', price: 300, image: 'toyota-fortuner.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 300, extraHourPrice: 55 } },

    /* LIMO SECTION KEPT */
    { name: 'Lincoln Limo', price: 900, image: 'lincoln-limo.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Limousine', rental: { baseHours: 5, basePrice: 900, extraHourPrice: 120 } },
    { name: 'Hummer Limo', price: 1100, image: 'hummer-limo.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Limousine', rental: { baseHours: 5, basePrice: 1100, extraHourPrice: 150 } },
    { name: 'Escalade Limo', price: 1000, image: 'escalade-limo.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Limousine', rental: { baseHours: 5, basePrice: 1200, extraHourPrice: 180 } },
    { name: 'Chrysler Limo', price: 950, image: 'chrysler-limo.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Limousine', rental: { baseHours: 5, basePrice: 950, extraHourPrice: 130 } },
    { name: 'GMC Yukon Limo', price: 1000, image: 'yukon-limo.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Limousine', rental: { baseHours: 5, basePrice: 1000, extraHourPrice: 140 } }
  ];

  filteredCars = [...this.cars];

  showQuote = false;
  selectedCar: any = null;

  quoteName = "";
  quotePhone = "";
  quoteMsg = "";

  filterCars(category: string) {
    this.filteredCars =
      category === 'All'
        ? [...this.cars]
        : this.cars.filter(car => car.category === category);

    this.scrollToCars();
  }

  scrollToCars() {
    const element = document.getElementById('cars');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  viewCar(name: string) {
    const slug = name.toLowerCase().replace(/ /g, '-');
    this.router.navigate(['/car', slug]);
  }

  openQuote(car: any) {
    this.selectedCar = car;
    this.showQuote = true;
  }

  closeQuote() {
    this.showQuote = false;
  }

  submitQuote() {
    if (!this.quoteName || !this.quotePhone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const phoneNumber = '971507172796';
    const message =
      `QUOTE REQUEST\n\n` +
      `Car: ${this.selectedCar.name}\n` +
      `Price: AED ${this.selectedCar.price}\n\n` +
      `Name: ${this.quoteName}\n` +
      `Phone: ${this.quotePhone}\n` +
      `Message: ${this.quoteMsg || 'No message provided.'}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    this.closeQuote();
    this.quoteName = "";
    this.quotePhone = "";
    this.quoteMsg = "";
  }
}