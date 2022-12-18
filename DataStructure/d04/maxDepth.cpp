#include <iostream>
using namespace std;

struct Node {
	int value;
	Node *left, *right;

	Node(int val)
	{
		this->value = val;
		this->left = this->right = NULL;
	}
};

int maxDepth(Node * root)
{
  // Root being null means tree doesn't exist.
  if (root == NULL)
    return 0;
  
  // Get the depth of the left and right subtree 
  // using recursion.
  
  int leftDepth = maxDepth(root->left);
  int rightDepth = maxDepth(root->right);

  // Choose the larger one and add the root to it.
  if (leftDepth > rightDepth)
    return leftDepth + 1;
  else
    return rightDepth + 1;
}

// driver code
int main() {
  Node* root = new Node(1);
  root->left = new Node(2);
  root->right = new Node(3);
  root->left->left = new Node(4);
  root->right->left = new Node(5);
  root->right->right = new Node(6);
  root->right->right->left = new Node(8);
  root->right->left->right = new Node(7);
  cout << "The maximum depth is: " << maxDepth(root) << endl;
}