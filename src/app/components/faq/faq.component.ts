import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,           // ✅ standalone component
  imports: [CommonModule],    // ✅ needed for *ngFor and *ngIf
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  // Track which FAQ is open
  faqOpen: boolean[] = Array(10).fill(false);

  faqs = [
    { question: 'Can I rent a car for a few hours only?', answer: 'Yes! We offer flexible hourly rental options. Check the car’s pricing details for hourly rates.' },
    { question: 'What documents are required to rent a car?', answer: 'You will need a valid driver’s license, a passport or Emirates ID, and a credit/debit card for security deposit.' },
    { question: 'Do you provide delivery and pickup services?', answer: 'Yes! We can deliver the car to your location and pick it up after your rental period (additional fees may apply).' },
    { question: 'Can I cancel or modify my booking?', answer: 'Yes, you can cancel or modify your booking up to 24 hours before the pickup time without any charges.' },
    { question: 'Are there any insurance options available?', answer: 'We provide standard insurance with all rentals. Additional coverage options are available upon request.' },
    { question: 'Is there a mileage limit on rental cars?', answer: 'Most rentals include unlimited mileage. Luxury or long-term rentals may have restrictions.' },
    { question: 'Can I add an additional driver?', answer: 'Yes, additional drivers can be added for a small fee. They must provide valid driving documents.' },
    { question: 'What happens in case of an accident?', answer: 'Contact our support immediately. Your insurance and rental agreement will guide the process.' },
    { question: 'Do you provide child seats or special equipment?', answer: 'Yes, child seats, GPS, and other accessories are available upon request at an additional cost.' },
    { question: 'What is the minimum age to rent a car?', answer: 'The minimum age to rent a car is 21 years. Some luxury vehicles may require the renter to be 25 or older.' }
  ];

  toggleFaq(index: number) {
    this.faqOpen[index] = !this.faqOpen[index];
  }
}
