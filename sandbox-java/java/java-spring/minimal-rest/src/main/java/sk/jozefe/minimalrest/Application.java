package sk.jozefe.minimalrest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author Jozef Krcho (jozefkrchoml@gmail.com)
 */
@SpringBootApplication
/* Same as:
    @Configuration
    @EnableAutoConfiguration
    @ComponentScan
 */
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
