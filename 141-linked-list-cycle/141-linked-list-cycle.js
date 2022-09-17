/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
        let current=head
        if(!current){return false}
        while(current.next){
            if(current.pos){return true}
        current.pos="banana"
            current=current.next
    }
    return false
};