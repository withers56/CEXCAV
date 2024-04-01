package com.example.demo.web;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.data.ContactEmail;
import com.example.demo.services.EmailService;

import java.util.Arrays;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping(value = "/api/email", headers = "Accept=application/json")
public class EmailController {

    private EmailService emailService;

    public EmailController(EmailService emailService){
        this.emailService = emailService;
    }
    
    @PostMapping("/sendEmail")
    public void sendEmail(@RequestBody ContactEmail newEmail){
        //no dynamic data yet, just hardcoding
        String formattedBody = "From: " + newEmail.getName() + "\nEmail: " + newEmail.getEmail() + "\nPhone Number: " + newEmail.getPhoneNumber() + "\n\n" + newEmail.getMessage();
        //commenting out send email due too it needing to verify domain still
        emailService.sendEmail("william.k.withers@gmail.com", "Customer inquiry", formattedBody);
    
    }
}
