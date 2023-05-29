var reverseList = function (head) {
  let prev = null;
  let current = head;
  if (!head) {
    return head;
  }
  while (current) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  head = prev;
  return head;
};
