#include <stdio.h>

#include <stdlib.h>

#include <iostream>

using namespace std;
// structure of a node
class Node {
  public: int data; // value of a node
  Node * next;
  Node(int data) {
    this -> data = data;
    this -> next = next;
  }
};

class LinkedList {
  Node * head, * tail;

  public:
    LinkedList() {
      head = NULL;
      tail = NULL;
    }

  void Add(int n) {
    Node * tmp = new Node(n);
    tmp -> data = n;
    tmp -> next = NULL;

    if (head == NULL) {
      head = tmp;
      tail = tmp;
    } else {
      tail -> next = tmp;
      tail = tail -> next;
    }
  };

  void Display() {
    Node * temp = head;
    if (head == NULL) {
      cout << "List empty" << endl;
      return;
    }

    // Traverse the list.
    while (temp != NULL) {
      cout << temp -> data << " ";
      temp = temp -> next;
    }
  };

  Node * find_middle_node(Node * start, Node * last) {
    if (start == NULL) {
      return NULL;
    }

    Node * slow = start;
    Node * fast = start -> next;

    while (fast != last) {
      fast = fast -> next;
      if (fast != last) {
        slow = slow -> next;
        fast = fast -> next;
      }
    }

    return slow;
  };

  Node * binarySearch(int value) {
    Node * start = head;
    Node * last = NULL;

    do {
      Node * mid = find_middle_node(start, last);
      if (mid == NULL) {
        return NULL;
      }

      if (mid -> data == value) {
        return mid;
      } else if (mid -> data < value) {
        start = mid -> next;
      } else {
        last = mid;
      }

    } while (last == NULL ||
      last != start);

    return NULL;
  }

};

int main() {

  LinkedList head;
  head.Add(1);
  head.Add(8);
  head.Add(4);

  if (head.binarySearch(8) == NULL)
    cout << "Value not present" << endl;
  else
    cout << "\n Present" << endl;

  printf("\n Linked list elements are ");
  head.Display();

  getchar();
  return 0;
}