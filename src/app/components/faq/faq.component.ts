import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  templateUrl: './faq.component.html', // keep same HTML file
  styleUrls: ['./faq.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews = [
    { name: "Ahmed R.", photo: "assets/reviews/user1.jpg", review: "Excellent service!" },
    { name: "Sarah M.", photo: "assets/reviews/user2.jpg", review: "Affordable and smooth process." },
    { name: "Jonathan P.", photo: "assets/reviews/user3.jpg", review: "Best rental service in Dubai." },
    { name: "Priya K.", photo: "assets/reviews/user4.jpg", review: "Driver was friendly!" },
    { name: "Mohammed A.", photo: "assets/reviews/user5.jpg", review: "Clean car, smooth ride." },
    { name: "Elena S.", photo: "assets/reviews/user6.jpg", review: "Reliable and fast." },
    { name: "David W.", photo: "assets/reviews/user7.jpg", review: "My go-to service." }
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    }, 3000); // Auto-slide every 3 seconds
  }
}