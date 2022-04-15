package com.modelsimplified.awsapi.profile;

import com.modelsimplified.awsapi.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class CardProfileDataAccessService {

//    private final FakeCardProfileDataStore fakeCardProfileDataStore;
    private final CardRepository cardRepository;

    @Autowired
    public CardProfileDataAccessService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    CardProfile getCardProfile(String uuid) {
        return cardRepository.findById(uuid).orElse(null);
    }

    List<CardProfile> getCardProfiles() {
        return cardRepository.findAll();
    }

    CardProfile saveCardProfile(CardProfile cardProfile) {
        return cardRepository.save(cardProfile);
    }
}
