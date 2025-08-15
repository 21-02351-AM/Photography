import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.contactService.sendMessage(this.contactData).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully!';
        this.contactData = { name: '', email: '', message: '' };
        this.isSubmitting = false;
      },
      error: () => {
        this.errorMessage = 'Failed to send message. Please try again.';
        this.isSubmitting = false;
      },
    });
  }
}
