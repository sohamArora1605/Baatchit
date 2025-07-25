package com.baatchit;



import io.github.cdimascio.dotenv.Dotenv;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.OAuthFlow;
import io.swagger.v3.oas.annotations.security.OAuthFlows;
import io.swagger.v3.oas.annotations.security.OAuthScope;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@SecurityScheme(
		name = "keycloak",
		type = SecuritySchemeType.OAUTH2,
		bearerFormat = "JWT",
		scheme = "bearer",
		in = SecuritySchemeIn.HEADER,
		flows = @OAuthFlows(
				password = @OAuthFlow(

authorizationUrl = "http://localhost:9081/realms/Baatchit/protocol/openid-connect/auth",
tokenUrl = "http://localhost:9081/realms/Baatchit/protocol/openid-connect/token")
		)
)
public class Application {

	public static void main(String[] args) {
		 Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
	        dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));

		SpringApplication.run(Application.class, args);
	}

}