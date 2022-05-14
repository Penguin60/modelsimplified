package com.modelsimplified.awsapi.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final String activeProfile;

    public WebConfig(@Value("${spring.profiles.active:local}") String activeProfile) {
        this.activeProfile = activeProfile;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
//        if("local".equals(activeProfile)) {
            registry.
                    addMapping("/api/**")
                    .allowedMethods("*")
                    .allowedOrigins("http://localhost:3000");
//        }
    }
}
