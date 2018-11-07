from concurrent.futures import ThreadPoolExecutor, TimeoutError
import time

executor = ThreadPoolExecutor(max_workers=2)


def my_function(name, sec):
    time.sleep(sec)
    return name + name


future1 = executor.submit(my_function, 'foo ', 4)
future2 = executor.submit(my_function, 'bar ', 1)
x1 = None
try:
    x1 = future1.result(2)
except TimeoutError:
    print('TimeoutError')

x2 = future2.result(2)
print('[thread1] - {0}'.format(x1))
print('[thread2] - {0}'.format(x2))
