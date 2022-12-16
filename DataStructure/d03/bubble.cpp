#include <stdio.h>
#include <stdlib.h>
#include <iostream>

using namespace std;
// structure of a node
class Node
{
public:
    int data; // value of a node
    Node *next;
    Node(int data)
    {
        this->data = data;
        this->next = next;
    }
};

class LinkedList
{
    Node *head, *tail;

public:
    LinkedList()
    {
        head = NULL;
        tail = NULL;
    }

    void Add(int n)
    {
        Node *tmp = new Node(n);
        tmp->data = n;
        tmp->next = NULL;

        if (head == NULL)
        {
            head = tmp;
            tail = tmp;
        }
        else
        {
            tail->next = tmp;
            tail = tail->next;
        }
    };

    void Display()
    {
        Node *temp = head;
        if (head == NULL)
        {
            cout << "List empty" << endl;
            return;
        }

        // Traverse the list.
        while (temp != NULL)
        {
            cout << temp->data << " ";
            temp = temp->next;
        }
    }

    // Bubble sort the given linked list
    void bubbleSort()
    {
        int swapp, i;
        Node *ptr1;
        Node *lptr = NULL;

        /* Checking for empty list */
        if (head == NULL)
            return;

        do
        {
            swapp = 0;
            ptr1 = head;

            while (ptr1->next != lptr)
            {
                if (ptr1->data > ptr1->next->data)
                {
                    swap(ptr1, ptr1->next);
                    swapp = 1;
                }
                ptr1 = ptr1->next;
            }
            lptr = ptr1;
        } while (swapp);
    }

    // function to swap data of two nodes a and b
    void swap(Node *a, Node *b)
    {
        int temp = a->data;
        a->data = b->data;
        b->data = temp;
    }
};

int main()
{

    LinkedList head;
    head.Add(1);
    head.Add(8);
    head.Add(4);

    // print list before sorting
    printf("\n Linked list before sorting ");
    head.Display();

    // sort the linked list
    head.bubbleSort();
    // print list after sorting
    printf("\n Linked list after sorting ");
    head.Display();

    getchar();
    return 0;
}
