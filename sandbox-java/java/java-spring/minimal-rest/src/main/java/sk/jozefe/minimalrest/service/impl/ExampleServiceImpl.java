package sk.jozefe.minimalrest.service.impl;

import org.springframework.stereotype.Service;
import sk.jozefe.minimalrest.dto.VariableDto;
import sk.jozefe.minimalrest.service.ExampleService;

/**
 * @author Jozef Krcho (jozefkrchoml@gmail.com)
 */
@Service
public class ExampleServiceImpl implements ExampleService {

    @Override
    public VariableDto processVariable(String variable) {
        return new VariableDto(variable);
    }
}
