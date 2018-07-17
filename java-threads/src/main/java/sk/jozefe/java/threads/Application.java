package sk.jozefe.java.threads;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import sk.jozefe.java.threads.examples.CustomThreadFactory;
import sk.jozefe.java.threads.examples.ExecutorServiceFactorialExample;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

/**
 * @author Jozef Krcho (jozef.krcho@lundegaard.eu)
 */
public class Application {

    private static final Logger LOG = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        CustomThreadFactory factory = new CustomThreadFactory("custom-thread-");
        ExecutorServiceFactorialExample factorialExcetuor = new ExecutorServiceFactorialExample();

        LOG.info("Starting threads.");
        List<Thread> threads = new ArrayList<>();
        for (int i = 1; i <= 5; i++)
        {
            Thread thread = factory.newThread(() -> {
                int number = new Random().nextInt(4) + 2;
                LOG.info("Asking to calc fibo: " + number);
                Future<Long> future = factorialExcetuor.submit(number);
                try {
                    long result = future.get();
                    LOG.info("Fibo of " + number + " is " + result);
                } catch (InterruptedException | ExecutionException e) {
                    LOG.error("Interrupted / Execution exception {}", e);
                }
            });
            thread.start();
            threads.add(thread);
        }
        LOG.info("All threads started.");

        for (Thread thread: threads) {
            try {
                thread.join(10000);
            } catch (InterruptedException e) {
                LOG.error("InterruptedException {}", e);
            }
        }
        LOG.info("Done");
    }
}
