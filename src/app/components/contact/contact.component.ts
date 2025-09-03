import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true, // ✅ must be standalone
  imports: [CommonModule], // ✅ needed for *ngIf, *ngFor
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent { }