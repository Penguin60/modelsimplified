package com.modelsimplified.awsapi.profile;

import com.modelsimplified.awsapi.bucket.BucketName;
import com.modelsimplified.awsapi.filestore.FileStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.*;

import static org.apache.http.entity.ContentType.*;

@Service
public class CardProfileService {

    private final CardProfileDataAccessService cardProfileDataAccessService;
    private final FileStore fileStore;

    @Autowired
    public CardProfileService(CardProfileDataAccessService cardProfileDataAccessService, FileStore fileStore) {
        this.cardProfileDataAccessService = cardProfileDataAccessService;
        this.fileStore = fileStore;
    }

    List<CardProfile> getCardProfiles() {
        return cardProfileDataAccessService.getCardProfiles();
    }

    public CardProfile saveCardProfile(CardProfile cardProfile) {
        return cardProfileDataAccessService.saveCardProfile(cardProfile);
    }

    public void uploadCardProfileImage(String cardProfileId, MultipartFile file) {
        // 1. Check if image is not empty
        isFileEmpty(file);
        // 2. If file is an image
        isImage(file);
        // 3. The user exists in our database
        CardProfile card = getCardProfileOrThrow(cardProfileId);
//        CardProfile card = cardProfileDataAccessService.getCardProfile(cardProfileId);

        // 4. Grab some metadata from file if any
        Map<String, String> metadata = extractMetadata(file);
        // 5. Store the image in s3 and update database (userProfileImageLink) with s3 image link
        String path = String.format("%s/%s", BucketName.PROFILE_IMAGE.getBucketName(), card.getCardProfileId());
        String filename = String.format("%s-%s", file.getOriginalFilename(), UUID.randomUUID());

        try {
            fileStore.save(path, filename, Optional.of(metadata), file.getInputStream());
            card.setCardProfileImageLink(filename);
            saveCardProfile(card);
        } catch (IOException e) {
            throw new IllegalStateException(e);
        }

    }

    byte[] downloadCardProfileImage(String cardProfileId) {
        CardProfile card = getCardProfileOrThrow(cardProfileId);

        String path = String.format("%s/%s",
                BucketName.PROFILE_IMAGE.getBucketName(),
                card.getCardProfileId());

        return card.getCardProfileImageLink()
                .map(key -> fileStore.download(path, key))
                .orElse(new byte[0]);

    }

    private Map<String, String> extractMetadata(MultipartFile file) {
        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type", file.getContentType());
        metadata.put("Content-Length", String.valueOf(file.getSize()));
        return metadata;
    }

    private CardProfile getCardProfileOrThrow(String cardProfileId) {
        return cardProfileDataAccessService
                .getCardProfiles()
                .stream()
                .filter(userProfile -> userProfile.getCardProfileId().equals(cardProfileId))
               .findFirst()
                .orElseThrow(() -> new IllegalStateException(String.format("Card %s not found", cardProfileId)));
    }

    private void isImage(MultipartFile file) {
        if (!Arrays.asList(
                IMAGE_JPEG.getMimeType(),
                IMAGE_PNG.getMimeType(),
                IMAGE_GIF.getMimeType()).contains(file.getContentType())) {
            throw new IllegalStateException("The file must be an image [" + file.getContentType() + "]");
    }
    }

    private void isFileEmpty(MultipartFile file) {
        if (file.isEmpty()) {
            throw new IllegalStateException("Cannot upload empty file [" + file.getSize() + "]");
        }
    }


}
