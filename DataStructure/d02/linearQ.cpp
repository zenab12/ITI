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

  };
};
class Queue{
Node* head;
Node* tail;
Node* temp;
public:
    Queue()
    {
head = NULL;
tail = NULL;
temp;
    }



void Insert() {
   int val;
   cout<<"Insert the element in queue : "<<endl;
   cin>>val;
   if (tail == NULL) {
      tail = ( Node *)malloc(sizeof(Node));
      tail->next = NULL;
      tail->data = val;
      head = tail;
   } else {
      temp=( Node *)malloc(sizeof( Node));
      tail->next = temp;
      temp->data = val;
      temp->next = NULL;
      tail = temp;
   }
}
void Delete() {
   temp = head;
   if (head == NULL) {
      cout<<"Underflow"<<endl;
      return;
   }
   else
   if (temp->next != NULL) {
      temp = temp->next;
      cout<<"Element deleted from queue is : "<<head->data<<endl;
      free(head);
      head = temp;
   } else {
      cout<<"Element deleted from queue is : "<<head->data<<endl;
      free(head);
      head = NULL;
      tail = NULL;
   }
}
void Display() {
   temp = head;
   if ((head == NULL) && (tail == NULL)) {
      cout<<"Queue is empty"<<endl;
      return;
   }
   cout<<"Queue elements are: ";
   while (temp != NULL) {
      cout<<temp->data<<" ";
      temp = temp->next;
   }
   cout<<endl;
}
}

int main() {
    Queue q;
   int ch;
   cout<<"1) Insert element to queue"<<endl;
   cout<<"2) Delete element from queue"<<endl;
   cout<<"3) Display all the elements of queue"<<endl;
   cout<<"4) Exit"<<endl;
   do {
      cout<<"Enter your choice : "<<endl;
      cin>>ch;
      switch (ch) {
         case 1: q.Insert();
         break;
         case 2: q.Delete();
         break;
         case 3: q.Display();
         break;
         case 4: cout<<"Exit"<<endl;
         break;
         default: cout<<"Invalid choice"<<endl;
      }
   } while(ch!=4);
   return 0;
}