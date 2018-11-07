package sk.jozefe.java.threads.examples;

import java.util.concurrent.ThreadFactory;

/**
 * @author Jozef Krcho (jozefkrchoml@gmail.com)
 */
public class CustomThreadFactory implements ThreadFactory {

    private int count;

    private String prefix;

    public CustomThreadFactory(String prefix) {
        this.count = 1;
        this.prefix = prefix;
    }

    @Override
    public Thread newThread(Runnable r) {
        return new Thread(r, prefix + count++);
    }
}
