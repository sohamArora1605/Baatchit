package com.baatchit.service;

import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
@Service
public class ExternalTranslationApiClient {

    private final RestTemplate restTemplate = new RestTemplate();

    public String translate(String text, String targetLang) {
        try {
            String apiUrl = "https://libretranslate.com/translate";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> body = Map.of(
                "q", text,
                "source", "auto",
                "target", targetLang.toLowerCase(),
                "format", "text",
                "alternatives", 3,
                "api_key", ""  // optional if you're using the public server
            );

            HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

            ResponseEntity<Map> response = restTemplate.postForEntity(apiUrl, request, Map.class);

            Object translated = response.getBody().get("translatedText");
            return translated != null ? translated.toString() : text;

        } catch (Exception e) {
            e.printStackTrace();
            return text; // fallback to original if error occurs
        }
    }
}
