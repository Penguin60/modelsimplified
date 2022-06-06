package com.modelsimplified.awsapi.userdetails;

import com.modelsimplified.awsapi.appuser.AppUser;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/userdetails")
public class DetailsController {

    @GetMapping(path = "/firstLastName")
    public String userDetails() {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String name = principal.toString();

        if (principal instanceof AppUser) {
            AppUser loggedInUser = (AppUser) principal;
            name = loggedInUser.getFirstName() + " " + loggedInUser.getLastName();
        }
        return name;
    }
}
