#include <iostream>
using namespace std;

class Queue {
  int * arr;
  int size;
  int head;
  int tail;
  int length;
  static int Counter;
  public:
    static int getCounter() {
      Queue temp;
      temp.head = -1;
      temp.tail = -1;
      return Counter;
    }
  Queue() {
    Counter++;
    cout << "this is constructor " << endl;
    size = 5;
    arr = new int[size];
    head = 0;
    tail = size - 1;
    length = 0;
  }
  Queue(int _size) {
      Counter++;
      cout << "this is constructor " << endl;
      size = _size;
      head = 0;
      tail = size - 1;
      length = 0;
      arr = new int[_size];

    }
    ~Queue() {
      Counter--;
      cout << "this is destructor" << endl;
      for (int i = 0; i < size; i++) {
        arr[i] = -1;
      }
      delete[] arr;
    }
  int isFull() {
    return length == size;
  }
  int isEmpty() {
    return length == 0;
  }

  int enqueue(int val) {
    if (!isFull()) {
      tail = (tail + 1) % size;
      arr[tail] = val;
      length++;
      cout << "the enqued element is :" << arr[tail] << endl;

    } else {

      cout << "can't enqued more elements as queue is Full" << endl;
    }
  }

  int dequeue() {
    if (!isEmpty()) {
      head = (head + 1) % size;
      cout << "the dequed element is :" << head << endl;
      --length;
    } else {

      cout << "queue is 4empty" << endl;
    }
  }
  friend void printQueue(Queue param);

};

void printQueue(Queue param) {
  for (int i = param.head; i != param.tail; i = (i + 1) % param.size) {
    cout << param.arr[i] << endl;
  }
  cout << param.arr[param.tail] << endl;
}

int Queue::Counter = 0;
int main() {
  Queue q(4), q2, q3;
  int ch, val;
  cout << "1) enqueue in queue" << endl;
  cout << "2) dequeue from queue" << endl;
  cout << "3) Display queue" << endl;
  cout << "4) Exit" << endl;
  do {
    cout << "Enter choice: " << endl;
    cin >> ch;
    switch (ch) {
    case 1: {
      cout << "Enter value to be enque:" << endl;
      cin >> val;
      q.enqueue(val);
      break;
    }
    case 2: {
      q.dequeue();

      break;
    }
    case 3: {
      printQueue(q);
      break;
    }
    case 4: {
      cout << "Exit" << endl;
      break;
    }
    default: {
      cout << "Invalid Choice" << endl;
    }
    }
  } while (ch != 4);

  cout << "Number of Objects created are : " << Queue::getCounter() << endl;
  return 0;
}