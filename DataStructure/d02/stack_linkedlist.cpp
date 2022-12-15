#include <iostream>

using namespace std;

class Node {
  public: int data;
  Node * next;

  // Constructor
  Node(int n)

  {
    this -> data = n;
    this -> next = NULL;

  }
};

class Stack {
  Node * top;

  public:
    Stack() {
      top = NULL;
    }
    ~Stack() {
      cout << "this is destructor" << endl;
    }
  void push(int data) {
    // Create new node temp and allocate memory in heap
    Node * temp = new Node(data);
    // Check if stack (heap) is full.
    // Then inserting an element would
    // lead to stack overflow
    if (!temp) {
      cout << "\nStack Overflow";
      exit(1);

    }

    // Initialize data into temp data field
    temp -> data = data;

    // Put top pointer reference into temp link
    temp -> next = top;

    // Make temp as top of Stack
    top = temp;
  }

  // Utility function to check if
  // the stack is empty or not
  bool isEmpty()

  {
    return top == NULL;
  }

  int peek()

  {
    if (!isEmpty())
      return top -> data;
    else exit(1);

  }

  void pop()

  {
    Node * temp;

    if (isEmpty()) {
      cout << "\nStack Underflow" << endl;
      exit(1);

    } else {
      temp = top;
      top = top -> next;
      free(temp);
    }
  }

  void display()

  {
    Node * temp;

    if (isEmpty()) {
      cout << "\nStack Underflow";
      exit(1);

    } else {
      temp = top;
      while (temp != NULL) {

        // Print node data
        cout << temp -> data;
        // Assign temp link to temp
        temp = temp -> next;
        if (temp != NULL)
          cout << " -> ";

      }

    }

  }
};

int main() {
  Stack s;
  int ch, val;
  cout << "1) Push in stack" << endl;
  cout << "2) Pop from stack" << endl;
  cout << "3) peek elemnt" << endl;
  cout << "4) Display stack" << endl;
  cout << "5) Exit" << endl;
  do {
    cout << "Enter choice: " << endl;
    cin >> ch;
    switch (ch) {
    case 1: {
      cout << "Enter value to be pushed:" << endl;
      cin >> val;
      s.push(val);
      break;
    }
    case 2: {
      s.pop();
      break;
    }
    case 3: {
      cout << "\nTop element is " << s.peek() << endl;
      break;
    }
    case 4: {
      cout << "\nstack elements are" << s.display() << endl;
      break;
    }
    case 5: {
      cout << "Exit" << endl;
      break;
    }
    default: {
      cout << "Invalid Choice" << endl;
    }
    }
  } while (ch != 5);

  return 0;
}