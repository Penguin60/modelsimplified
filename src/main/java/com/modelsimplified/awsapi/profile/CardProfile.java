package com.modelsimplified.awsapi.profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Entity @NoArgsConstructor @AllArgsConstructor
public class CardProfile {
    @Id
    private String cardProfileId;
    private String cardName;
    private String cardProfileImageLink; // S3 Key

    public String getCardProfileId() {
        return cardProfileId;
    }

    public String getCardName() {
        return cardName;
    }

    public Optional<String> getCardProfileImageLink() {
        return Optional.ofNullable(cardProfileImageLink);
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public void setCardProfileImageLink(String cardProfileImageLink) {
        this.cardProfileImageLink = cardProfileImageLink;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CardProfile that = (CardProfile) o;
        return Objects.equals(cardProfileId, that.cardProfileId) &&
                Objects.equals(cardName, that.cardName) &&
                Objects.equals(cardProfileImageLink, that.cardProfileImageLink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cardProfileId, cardName, cardProfileImageLink);
    }
}
