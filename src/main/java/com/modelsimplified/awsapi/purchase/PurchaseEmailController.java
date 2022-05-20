package com.modelsimplified.awsapi.purchase;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RequestMapping("api/v1/purchase")
@RestController
@AllArgsConstructor
public class PurchaseEmailController{

    private PurchaseEmailService purchaseEmailService;

    @PostMapping(path = "/sendPurchaseEmail")
    public void purchase(@RequestParam("cardName") String cardName) {
        purchaseEmailService.sendPurchase(cardName);
    }
}
