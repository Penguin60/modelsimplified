package com.modelsimplified.awsapi.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AmazonConfig {

    @Bean
    public AmazonS3 s3() {
        AWSCredentials awsCredentials = new BasicAWSCredentials(
                "AKIATQ3V7SCWHJGX5Q4K",
                "+kismFzLoQGYcElWMRML0PXcGQOaP3EeHXobUwQf"
        );

        return AmazonS3ClientBuilder
                .standard()
//                .withRegion("us-east-1")
                .withRegion("ca-central-1")
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();

    }
}
