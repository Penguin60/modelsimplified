package com.modelsimplified.awsapi.registration;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.UnknownHostException;

@RestController
@RequestMapping(path="api/v1/registration")
@AllArgsConstructor

public class RegistrationController {

    private RegistrationService registrationService;

    @PostMapping
    public String register(@RequestBody RegistrationRequest request, HttpServletRequest req)  throws UnknownHostException {
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
