package com.modelsimplified.awsapi.purchase;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/v1/purchase")
@RestController
@AllArgsConstructor
public class PurchaseEmailController{

    private PurchaseEmailService purchaseEmailService;

    @PostMapping(path = "/sendPurchaseEmail")
    public void purchase() {
        purchaseEmailService.sendPurchase();
    }
}
