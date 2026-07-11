package com.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.portfolio.model.ContactRequest;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;

    public void sendContactEmail(ContactRequest request) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("dopabob166@gmail.com");
            message.setReplyTo(request.getEmail());
            message.setTo("ommahajan166@gmail.com");
            message.setSubject("New Portfolio Contact from " + request.getName());
            message.setText("Name: " + request.getName() + "\n" +
                          "Email: " + request.getEmail() + "\n" +
                          "Message: " + request.getMessage());
            
            mailSender.send(message);
            
            // Send confirmation email to user
            SimpleMailMessage confirmationMessage = new SimpleMailMessage();
            confirmationMessage.setTo(request.getEmail());
            confirmationMessage.setSubject("Thank you for contacting Om Mahajan");
            confirmationMessage.setText("Hi " + request.getName() + ",\n\n" +
                                      "Thank you for reaching out! I've received your message and will get back to you soon.\n\n" +
                                      "Best regards,\n" +
                                      "Om Mahajan");
            
            mailSender.send(confirmationMessage);
        } catch (Exception e) {
            throw new RuntimeException("Failed to send email: " + e.getMessage());
        }
    }
}