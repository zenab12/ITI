#include <iostream>
using namespace std;
class Node{
   public:
   int data;
   Node* next;
};
void insertNode(Node** head_ref, int new_data) {
   Node* new_node = new Node();
   new_node->data = new_data;
   new_node->next = (*head_ref);
   (*head_ref) = new_node;
};
int findNodeAt(Node* head, int index) {
   Node* current = head;
   int count = 0;
   while (current != NULL){
      if (count == index)
         return(current->data);
      count++;
      current = current->next;
   }
};
int main(){
   Node* head = NULL;
   insertNode(&head, 8);
   insertNode(&head, 2);
   insertNode(&head, 9);
   insertNode(&head, 1);
   insertNode(&head, 4);
   int n = 2;
   cout<<"Element at index "<<n<<" is "<<findNodeAt(head, 2);
   return 0;
}