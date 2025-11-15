import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ required for ngModel

@Component({
  selector: 'app-car-grid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-grid.component.html',
  styleUrls: ['./car-grid.component.css']
})
export class CarGridComponent {

  constructor(private router: Router) {}

  // ✅ FULL CAR LIST
  cars = [
    { name: 'Nissan Patrol', price: 360, image: 'patrol.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 360, extraHourPrice: 65 } },
    { name: 'Toyota Corolla', price: 120, image: 'corolla.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Sedan', rental: { baseHours: 10, basePrice: 120, extraHourPrice: 65 } },
    { name: 'BMW X5', price: 450, image: 'bmw.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Luxury', rental: { baseHours: 10, basePrice: 450, extraHourPrice: 65 } },
    { name: 'Kia Carnival', price: 380, image: 'kia-carnival.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Van', rental: { baseHours: 10, basePrice: 380, extraHourPrice: 70 } },
    { name: 'Odyssey Sedona', price: 400, image: 'odyssey-sedona.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Van', rental: { baseHours: 10, basePrice: 400, extraHourPrice: 75 } },
    { name: 'Mercedes GLE', price: 500, image: 'mercedes-gle.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Luxury', rental: { baseHours: 10, basePrice: 500, extraHourPrice: 80 } },
    { name: 'Audi Q7', price: 480, image: 'audi-q7.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Luxury', rental: { baseHours: 10, basePrice: 480, extraHourPrice: 75 } },
    { name: 'Toyota Land Cruiser', price: 420, image: 'landcruiser.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 420, extraHourPrice: 70 } },
    { name: 'Honda CR-V', price: 200, image: 'crv.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 200, extraHourPrice: 50 } },
    { name: 'Hyundai Tucson', price: 180, image: 'tucson.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 180, extraHourPrice: 45 } },
    { name: 'Ford Explorer', price: 350, image: 'explorer.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 350, extraHourPrice: 65 } },
    { name: 'Chevrolet Tahoe', price: 370, image: 'tahoe.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 370, extraHourPrice: 70 } },
    { name: 'Range Rover Evoque', price: 450, image: 'evoque.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Luxury', rental: { baseHours: 10, basePrice: 450, extraHourPrice: 75 } },
    { name: 'Lexus RX', price: 460, image: 'lexus-rx.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Luxury', rental: { baseHours: 10, basePrice: 460, extraHourPrice: 78 } },
    { name: 'Jeep Grand Cherokee', price: 390, image: 'grandcherokee.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 390, extraHourPrice: 70 } },
    { name: 'Toyota Camry', price: 140, image: 'camry.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Sedan', rental: { baseHours: 10, basePrice: 140, extraHourPrice: 50 } },
    { name: 'Honda Accord', price: 150, image: 'accord.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Sedan', rental: { baseHours: 10, basePrice: 150, extraHourPrice: 50 } },
    { name: 'Volkswagen Touareg', price: 410, image: 'touareg.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 410, extraHourPrice: 72 } },
    { name: 'Mazda CX-9', price: 220, image: 'cx9.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 220, extraHourPrice: 55 } },
    { name: 'Kia Sorento', price: 200, image: 'sorento.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'SUV', rental: { baseHours: 10, basePrice: 200, extraHourPrice: 50 } },
    { name: 'Lincoln Limo', price: 900, image: 'lincoln-limo.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Limousine', rental: { baseHours: 5, basePrice: 900, extraHourPrice: 120 } },
    { name: 'Hummer Limo', price: 1100, image: 'hummer-limo.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Limousine', rental: { baseHours: 5, basePrice: 1100, extraHourPrice: 150 } },
    { name: 'Escalade Limo', price: 1200, image: 'escalade-limo.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Limousine', rental: { baseHours: 5, basePrice: 1200, extraHourPrice: 180 } },
    { name: 'Chrysler Limo', price: 950, image: 'chrysler-limo.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Limousine', rental: { baseHours: 5, basePrice: 950, extraHourPrice: 130 } },
    { name: 'GMC Yukon Limo', price: 1000, image: 'yukon-limo.jpg', whatsappLink: 'https://wa.me/971507172796', phone: '+971507172796', category: 'Limousine', rental: { baseHours: 5, basePrice: 1000, extraHourPrice: 140 } }
  ];

  filteredCars = [...this.cars];

  // ✅ QUOTE FORM STATE
  showQuote = false;
  selectedCar: any = null;

  quoteName: string = "";
  quotePhone: string = "";
  quoteMsg: string = "";

  // ✅ FILTER CARS
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

  // ✅ OPEN CAR DETAILS PAGE
  viewCar(name: string) {
    const slug = name.toLowerCase().replace(/ /g, '-');
    this.router.navigate(['/car', slug]); // Ensure route /car/:name exists
  }

  // ✅ OPEN QUOTE POPUP
  openQuote(car: any) {
    this.selectedCar = car;
    this.showQuote = true;
  }

  closeQuote() {
    this.showQuote = false;
  }

  // ✅ SUBMIT QUOTE (WHATSAPP)
  submitQuote() {
    if (!this.quoteName || !this.quotePhone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const phoneNumber = '971507172796';
    const message =
      `🚗 QUOTE REQUEST\n\n` +
      `Car: ${this.selectedCar.name}\n` +
      `Price: AED ${this.selectedCar.price}\n\n` +
      `👤 Name: ${this.quoteName}\n` +
      `📞 Phone: ${this.quotePhone}\n` +
      `📝 Message: ${this.quoteMsg || 'No message provided.'}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank'); // Open WhatsApp
    this.closeQuote(); // Close modal
    this.quoteName = "";
    this.quotePhone = "";
    this.quoteMsg = "";
  }
}