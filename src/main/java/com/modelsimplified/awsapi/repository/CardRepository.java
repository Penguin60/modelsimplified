package com.modelsimplified.awsapi.repository;

import com.modelsimplified.awsapi.profile.CardProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CardRepository extends JpaRepository<CardProfile, String> {

}
