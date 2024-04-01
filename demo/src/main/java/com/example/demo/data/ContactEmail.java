package com.example.demo.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ContactEmail {
    
    private String name;
    private String email;
    private String phoneNumber;
    private String message;
}
