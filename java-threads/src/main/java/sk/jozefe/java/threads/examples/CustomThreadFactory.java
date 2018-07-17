package sk.jozefe.java.threads.examples;

import java.util.concurrent.ThreadFactory;

/**
 * @author Jozef Krcho (jozef.krcho@lundegaard.eu)
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
