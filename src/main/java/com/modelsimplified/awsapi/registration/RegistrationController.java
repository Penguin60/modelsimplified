package com.modelsimplified.awsapi.registration;

import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.UnknownHostException;

@RestController
@RequestMapping(path="api/v1/registration")
@AllArgsConstructor

public class RegistrationController {

    private RegistrationService registrationService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String register(
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("password") String password,
            @RequestParam("email") String email,
            HttpServletRequest req)  throws UnknownHostException {
        RegistrationRequest request = new RegistrationRequest(firstName, lastName, password, email);
        return registrationService.register(request, getSiteURL(req));
    }

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return registrationService.confirmToken(token);
    }

    private String getSiteURL(HttpServletRequest req) {
        return req.getRequestURL().toString().replace(req.getServletPath(), "");
    }
}
