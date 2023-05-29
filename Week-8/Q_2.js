//Given a singly linked list of size N. The task is to left-shift the linked list by k
//nodes,where k is a given positive integer smaller than or equal to length of
//the linked list.

var rotateRight = function (head, k) {
  let size = 0;
  let tail = null;
  if (!head) {
    return head;
  }
  let current = head;
  while (current.next != null) {
    current = current.next;
    size += 1;
  }
  tail = current;
  size += 1;

  const actualK = k % size;
  if (actualK == 0) {
    return head;
  }
  let breakpoint = size - actualK - 1;
  let curr = head;
  while (breakpoint != 0) {
    curr = curr.next;
    breakpoint--;
  }
  const newHead = curr.next;
  curr.next = null;
  tail.next = head;
  head = newHead;
  return head;
};
