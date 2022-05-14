package com.modelsimplified.awsapi.email;

public interface EmailSender {
    void send(String to, String email, String subject, String from);
}
