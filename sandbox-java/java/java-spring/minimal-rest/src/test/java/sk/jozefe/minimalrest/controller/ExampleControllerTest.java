package sk.jozefe.minimalrest.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * @author Jozef Krcho (jozefkrchoml@gmail.com)
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ExampleControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void simpleGetTest() throws Exception {
        this.mvc.perform(get("/example"))
                .andExpect(status()
                        .isOk())
                .andExpect(content()
                        .json("{\"message\":\"get-response\"}"));
    }

    @Test
    public void simplePostTest() throws Exception {
        this.mvc.perform(post("/example"))
                .andExpect(status()
                        .isOk())
                .andExpect(content()
                        .json("{\"message\":\"post-response\"}"));
    }

    @Test
    public void variableGetTest() throws Exception {
        String testVariable = "testing_variable_value";
        this.mvc.perform(get("/example/" + testVariable))
                .andExpect(status()
                        .isOk())
                .andExpect(content()
                        .json("{\"variable\":\""+ testVariable +"\"}"));
    }
}
