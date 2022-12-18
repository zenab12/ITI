#include<iostream> 
using namespace std;

struct node {
    int num;
    struct node * next;
}*head;
void build(int n)//function to build linked list
{
    int i, num;
    struct node *preptr, *newnode;

    if(n >= 1)
    {
        head = (struct node *)malloc(sizeof(struct node));

        cout<<"Enter data of the list:\n"; cin>>num;
        head->num = num;
        head->next = NULL;
        preptr = head;
        for(i=2; i<=n; i++) { newnode = (struct node *)malloc(sizeof(struct node)); cin>>num;
            newnode->num = num;
            newnode->next = NULL;	
            preptr->next = newnode;	
            preptr = newnode;   		
        }
        preptr->next = head; //linking last node with head node
    }
}
void display(struct node *head)//function to display list
{
    struct node *tmp;
    int n = 1;
    
    if(head == NULL)
    {
        cout<<"List is empty";
    }
    else
    {
        tmp = head;
        
        
        do {
            cout<<tmp->num<<" "; tmp = tmp->next;
            n++;
        }while(tmp != head);
    }
}
int count(struct node *head)//function to count number of nodes
{
    int cnt = 0;
    struct node *cur = head;

    //Iterating till end of list
    do 
    {
        cur = cur->next;
        cnt++;
    } while (cur != head);

    return cnt;
}

int main()//main function
{
    int n;
    struct node *head1 = NULL; 
    struct node *head2 = NULL;
    head = NULL;
    cout<<"Enter the size of circular linked list: "; cin>>n;
    build(n); 
    cout<<"\nCircular linked list data:\n";
    display(head);
    cout<<"\nTotal number of nodes are: "<<count(head);
}