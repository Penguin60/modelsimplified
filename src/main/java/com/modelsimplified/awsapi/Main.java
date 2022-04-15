package com.modelsimplified.awsapi;

import com.modelsimplified.awsapi.profile.CardProfile;
import com.modelsimplified.awsapi.profile.CardProfileService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class Main {

	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

	@Bean
	CommandLineRunner run(CardProfileService cardProfileService) {
		return args -> {
			//cardProfileService.saveCardProfile(new CardProfile(UUID.randomUUID().toString(), "Card 01", null));
		};
	}

}
