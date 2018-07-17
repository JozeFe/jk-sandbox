package sk.jozefe.java.threads.examples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Random;
import java.util.concurrent.*;

/**
 * @author Jozef Krcho (jozef.krcho@lundegaard.eu)
 */
public class ExecutorServiceFactorialExample {

    private static final Logger LOG = LoggerFactory.getLogger(ExecutorServiceFactorialExample.class);

    private static final ExecutorService executorService = new ThreadPoolExecutor(
            3,
            3,
            0L,
            TimeUnit.MILLISECONDS,
            new LinkedBlockingQueue<>(5000),
            new CustomThreadFactory("factorial-thread-"));

    public Future<Long> submit(int number) {
        return executorService.submit(new FactorialCallable(number));
    }

    private class FactorialCallable implements Callable<Long> {

        private int number;

        private FactorialCallable(int number) {
            this.number = number;
        }

        private long slowFactorial(int n) {
            if (n == 1) return 1;
            try {
                Thread.sleep(new Random().nextInt(5000));
            } catch (InterruptedException e) {
                LOG.error("Thread sleep interrupted exception {}", e);
            }
            return n * slowFactorial(n-1);
        }

        @Override
        public Long call() {
            LOG.info("Calculating ...");
            return slowFactorial(number);
        }
    }
}
