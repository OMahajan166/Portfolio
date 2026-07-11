package com.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.portfolio.model.ContactRequest;
import com.portfolio.service.EmailService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ContactController {
    
    @Autowired
    private EmailService emailService;

    @PostMapping("/contact")
    public ResponseEntity<?> sendContact(@RequestBody ContactRequest request) {

        if (request.getName() == null || request.getName().trim().isEmpty()
                || request.getEmail() == null || request.getEmail().trim().isEmpty()
                || request.getMessage() == null || request.getMessage().trim().isEmpty()) {

            return ResponseEntity.badRequest().body(
                    java.util.Map.of(
                            "success", false,
                            "message", "All fields are required"));
        }

        try {

            emailService.sendContactEmail(request);

            return ResponseEntity.ok(
                    java.util.Map.of(
                            "success", true,
                            "message", "Message sent successfully"));

        } catch (Exception e) {

            return ResponseEntity.internalServerError().body(
                    java.util.Map.of(
                            "success", false,
                            "message", e.getMessage()));
        }
    }

    @GetMapping("/health")
    public ResponseEntity<?> health() {
        return ResponseEntity.ok("Portfolio backend is running!");
    }
}