package com.modelsimplified.awsapi.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/card-profile")
@CrossOrigin("*")
public class CardProfileController {

    private final CardProfileService cardProfileService;

    @Autowired
    public CardProfileController(CardProfileService cardProfileService) {
        this.cardProfileService = cardProfileService;
    }

    @GetMapping
    public List<CardProfile> getCardProfiles() {
        return cardProfileService.getCardProfiles();
    }

    @PostMapping(
            path = "{cardProfileId}/image/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadCardProfileImage(@PathVariable("cardProfileId") String cardProfileId,
                                       @RequestParam("file") MultipartFile file) {
        cardProfileService.uploadCardProfileImage(cardProfileId, file);
    }

    @GetMapping("{cardProfileId}/image/download")
    public byte[] downloadUserProfileImage(@PathVariable("cardProfileId") String cardProfileId) {
        return cardProfileService.downloadCardProfileImage(cardProfileId);
    }

}
