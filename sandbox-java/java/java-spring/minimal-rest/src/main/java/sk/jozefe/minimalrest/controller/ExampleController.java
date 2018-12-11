package sk.jozefe.minimalrest.controller;

import lombok.RequiredArgsConstructor;
import org.apache.tomcat.jni.Time;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import sk.jozefe.minimalrest.dto.VariableDto;
import sk.jozefe.minimalrest.service.ExampleService;

/**
 * @author Jozef Krcho (jozefkrchoml@gmail.com)
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/example")
public class ExampleController {

    private static final Logger LOG = LoggerFactory.getLogger(ExampleController.class);

    private final ExampleService exampleService;

    @CrossOrigin
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public String simpleGet() {
        LOG.debug("Returning Simple Get");
        return "{\"message\":\"get-response\"}";
    }

    @CrossOrigin
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public String simplePost() {
        LOG.debug("Returning Simple Post");
        return "{\"message\":\"post-response\"}";
    }

    @CrossOrigin
    @GetMapping(path ="/{variable}",produces = MediaType.APPLICATION_JSON_VALUE)
    public VariableDto variableGet(@PathVariable("variable") String variable) {
        LOG.debug("Processing passed variable");
        return exampleService.processVariable(variable);
    }

    @CrossOrigin
    @GetMapping(path ="/sleep/{time}",produces = MediaType.APPLICATION_JSON_VALUE)
    public String sleep(@PathVariable("time") String time) {
        LOG.debug("Processing sleep request for: {} sec", time);
        try {
            long duration = Long.parseLong(time);
            Thread.sleep(duration * 1000);
        } catch (NumberFormatException e) {
            LOG.error("Fail to format variable {} into long", time);
            e.printStackTrace();
        } catch (InterruptedException e) {
            LOG.error("Interrupted while Thread.sleep");
            e.printStackTrace();
        }
        return "{\"message\":\"get-from-sleep\"}";
    }
}
