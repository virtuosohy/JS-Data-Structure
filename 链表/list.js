//定义单链表的存储结构
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 无参初始化单链表
function initList() {
    return null;
}

// 有参初始化单链表
function initListWithData(arr) {
    if (arr.length === 0) {
        return null;
    }
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

//单链表长度
function getLength(head) {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    return length;
}

//按位置查找
function findByIndex(head, index) {
    if (index < 0) {
        return null;
    }
    let current = head;
    let count = 0;
    while (current && count < index) {
        current = current.next;
        count++;
    }
    return current;
}

//按值查找
function findByValue(head, value) {
    let current = head;
    while (current) {
        if (current.data === value) {
            return current;
        }
        current = current.next;
    }
    return null;
}

// 在位置i插入一个数据元素
function insert(head, index, data) {
    if (index < 0) {
        return head;
    }
    if (index === 0) {
        let newNode = new ListNode(data);
        newNode.next = head;
        return newNode;
    }
    let prev = findByIndex(head, index - 1);
    if (!prev) {
        return head;
    }
    let newNode = new ListNode(data);
    newNode.next = prev.next;
    prev.next = newNode;
    return head;
}

//删除位置i的数据元素
function deleteAt(head, index) {
    if (index < 0 ||!head) {
        return head;
    }
    if (index === 0) {
        return head.next;
    }
    let prev = findByIndex(head, index - 1);
    if (!prev ||!prev.next) {
        return head;
    }
    prev.next = prev.next.next;
    return head;
}


//遍历单链表
function traverse(head) {
    let current = head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

//合并链表
function mergeLists(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;
    while (list1 && list2) {
        if (list1.data < list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return dummy.next;
}

//销毁单链表
function destroyList(head) {
    head = null;
}

// 测试示例
let list1 = initListWithData([1, 3, 5]);
let list2 = initListWithData([2, 4, 6]);

console.log("List1长度:", getLength(list1));
console.log("查找位置2的节点:", findByIndex(list1, 2));
console.log("按值查找3的节点:", findByValue(list1, 3));

let insertedList = insert(list1, 1, 2);
console.log("插入元素后的链表:");
traverse(insertedList);

let deletedList = deleteAt(insertedList, 2);
console.log("删除元素后的链表:");
traverse(deletedList);

let mergedList = mergeLists(list1, list2);
console.log("合并后的链表:");
traverse(mergedList);

destroyList(mergedList);
