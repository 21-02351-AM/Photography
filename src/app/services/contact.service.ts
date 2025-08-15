import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private serviceId = 'service_ny1mja8';
  private templateId = 'template_b4pbk5j'; // main template (to you)
  private autoReplyTemplateId = 'template_shxyi4r'; // create this in EmailJS
  private publicKey = 'qnghcPOYjfkT6V_T3';

  constructor() {
    emailjs.init(this.publicKey);
  }

  sendMessage(data: { name: string; email: string; message: string }) {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: 'test.email.0.7.2.2.0.2@gmail.com', // your email
    };

    const autoReplyParams = {
      from_name: data.name,
      from_email: data.email, // This will be used as {{from_email}} in auto-reply template
    };

    // Send both emails in parallel
    const sendMain = emailjs.send(
      this.serviceId,
      this.templateId,
      templateParams
    );
    const sendAutoReply = emailjs.send(
      this.serviceId,
      this.autoReplyTemplateId,
      autoReplyParams
    );

    return from(Promise.all([sendMain, sendAutoReply]));
  }
}
