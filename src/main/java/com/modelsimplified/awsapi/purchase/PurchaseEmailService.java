package com.modelsimplified.awsapi.purchase;

import com.modelsimplified.awsapi.appuser.AppUser;
import com.modelsimplified.awsapi.email.EmailService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PurchaseEmailService {

    private final static Logger LOGGER = LoggerFactory.getLogger(PurchaseEmailService.class);
    private final EmailService emailService;

    public void sendPurchase(String cardName) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String name = principal.toString();

        if (principal instanceof AppUser) {
            AppUser loggedInUser = (AppUser)principal;
            name = loggedInUser.getFirstName() + " " + loggedInUser.getLastName();
        }


        String email = String.format("Hi Radean, %s bought the '%s'!", name, cardName);
        emailService.send("radean.rashed@gmail.com",
                email, "New Purchase", "hello.modelsimplified@gmail.com");
    }
}
