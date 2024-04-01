package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.demo.services.EmailService;

@SpringBootApplication
public class SendEmailApplication {

    private EmailService emailService;

    public SendEmailApplication(EmailService emailService) {
        this.emailService = emailService;
    }

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(SendEmailApplication.class, args);
        SendEmailApplication app = context.getBean(SendEmailApplication.class);

        app.Run();
    }

    private void Run(){
        emailService.sendEmail("william.k.withers@gmail.com", "email from boot", "bruh");
    }
}
