package com.modelsimplified.awsapi.datastore;

import com.modelsimplified.awsapi.profile.CardProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeCardProfileDataStore {

    private static final List<CardProfile> CARD_PROFILES =  new ArrayList<>();

            static {
                CARD_PROFILES.add(new CardProfile("11e6bf03-abd3-4f88-b62f-6b5b7d2b5c5c", "janetjones", null));
                CARD_PROFILES.add(new CardProfile("91463ebb-adc8-4d2d-910d-e62c33b59c8b", "antoniojunior", null));


            }
            public List<CardProfile> getCardProfiles() {
                return CARD_PROFILES;
            }
}
