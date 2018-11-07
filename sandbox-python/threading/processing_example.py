import multiprocessing
import time


def some_other_func(name, arg2):
    print("[{0}] - start running process, arg={1}".format(name, arg2))
    # time.sleep(1)
    while True:
        time.sleep(1)
        print('[{0}] - .'.format(name))


if __name__ == '__main__':
    p1_name = 'process1'
    p1 = multiprocessing.Process(target=some_other_func, args=(p1_name, 'foo',))
    print('[{0}] - is_alive={1}'.format(p1_name, p1.is_alive()))
    print('[{0}] - start() call'.format(p1_name))
    p1.start()
    print('[{0}] - is_alive={1}'.format(p1_name, p1.is_alive()))

    time.sleep(1)
    # time.sleep(5)

    print('[{0}] - exitcode={1}'.format(p1_name, p1.exitcode))
    try:
        p1.terminate()
        print('[{0}] - terminated'.format(p1_name))
    except:
        print('force terminate')

    print('[{0}] - exitcode={1}'.format(p1_name, p1.exitcode))
# print(p, p.is_alive())
# p.exitcode == -signal.SIGTERM
