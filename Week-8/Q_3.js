//Given a linked list of N nodes. The task is to check if the linked list has a loop.
//Linkedlist can contain self loop.

var hasCycle = function (head) {
  let slowPtr = head;
  let fastPtr = head;
  if (!slowPtr || !fastPtr) {
    return false;
  }
  while (fastPtr != null && fastPtr.next != null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr === fastPtr) {
      return true;
    }
  }
  return false;
};
