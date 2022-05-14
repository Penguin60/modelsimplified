package com.modelsimplified.awsapi.common;

import lombok.experimental.UtilityClass;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;

@UtilityClass
public class CommonUtils {
    public boolean isLocalRun(Environment environment) {
        return environment.acceptsProfiles(Profiles.of("local"));
    }
}
