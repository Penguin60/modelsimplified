package com.modelsimplified.awsapi.purchase;

public interface PurchaseEmailSender {
    void sendPurchase(String to, String email);
}
