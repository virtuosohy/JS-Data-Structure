# 一.数组

**数据类型分类**

- `number` / `string` / `boolean` / `undefined` / `null` / `object` / `function`  /  `array` / ...
- 数组也是数据类型中的一种
- 我们简单的把所有数据类型分为两个大类 **基本数据类型** 和 **复杂数据类型**
- 基本数据类型： `number` / `string` / `boolean` / `undefined` / `null`
- 复杂数据类型： `object` / `function`  /  `array` / ...





### 1.创建数组

**字面量创建一个数组**

- 直接使用 `[]` 的方式创建一个数组

```js
// 创建一个空数组
var arr1 = []

// 创建一个有内容的数组
var arr2 = [1, 2, 3]
```



**内置构造函数创建数组**

- 使用 `js` 的内置构造函数 `Array` 创建一个数组

```js
// 创建一个空数组
var arr1 = new Array()

// 创建一个长度为 10 的数组
var arr2 = new Array(10)

// 创建一个有内容的数组
var arr3 = new Array(1, 2, 3)
```



### 2.数组的长度

- `length`:  长度的意思
- `length` 就是表示数组的长度，数组里面有多少个成员，`length` 就是多少

```js
// 创建一个数组
var arr = [1, 2, 3]

console.log(arr.length) // 3
```



### 3.数组的索引

- 索引，也叫做下标，是指一个数据在数组里面排在第几个的位置
- 注意： **在所有的语言里面，索引都是从 0 开始的**
- 在 `js` 里面也一样，数组的索引从 0 开始

```js
// 创建一个数组
var arr = ['hello', 'world']

console.log(arr[0]) // hello
console.log(arr[1]) // world
```



数组的遍历

```js
for( let i = 0; i< array.length ;i++){
    
}
```



### 4.数组的常用方法

**数组常用方法之 push**

- `push` 是用来在数组的末尾追加一个元素

```js
var arr = [1, 2, 3]

// 使用 push 方法追加一个元素在末尾
arr.push(4)

console.log(arr) // [1, 2, 3, 4]
```



**数组常用方法之 pop**

- `pop` 是用来删除数组末尾的一个元素

```js
var arr = [1, 2, 3]

// 使用 pop 方法删除末尾的一个元素
arr.pop()

console.log(arr) // [1, 2]
```



**数组常用方法之 unshift**

- `unshift` 是在数组的最前面添加一个元素

```js
var arr = [1, 2, 3]

// 使用 unshift 方法想数组的最前面添加一个元素
arr.unshift(4)

console.log(arr) // [4, 1, 2, 3]
```



**数组常用方法之  shift**

- `shift` 是删除数组最前面的一个元素

```js
var arr = [1, 2, 3]

// 使用 shift 方法删除数组最前面的一个元素
arr.shift()

console.log(arr) // [2, 3]
```



**数组常用方法之 splice**

- `splice` 是截取数组中的某些内容，按照数组的索引来截取
- 语法： `splice(从哪一个索引位置开始，截取多少个，替换的新元素)` （第三个参数可以不写）

```js
var arr = [1, 2, 3, 4, 5]

// 使用 splice 方法截取数组
arr.splice(1, 2)

console.log(arr) // [1, 4, 5]
```

- `arr.splice(1, 2)` 表示从索引 1 开始截取 2 个内容
- 第三个参数没有写，就是没有新内容替换掉截取位置

```js
var arr = [1, 2, 3, 4, 5]

// 使用 splice 方法截取数组
arr.splice(1, 2, '我是新内容')

console.log(arr) // [1, '我是新内容', 4, 5]
```



**数组常用方法之 reverse**

- `reverse` 是用来反转数组使用的

```js
var arr = [1, 2, 3]

// 使用 reverse 方法来反转数组
arr.reverse()

console.log(arr) // [3, 2, 1]
```



**数组常用方法之 sort**

- `sort` 是用来给数组排序的

```js
var arr = [2, 3, 1]

// 使用 sort 方法给数组排序
arr.sort()

console.log(arr) // [1, 2, 3]
```



**数组常用方法之 concat**

- `concat` 是把多个数组进行拼接
- 和之前的方法有一些不一样的地方，就是 `concat` 不会改变原始数组，而是返回一个新的数组

```js
var arr = [1, 2, 3]

// 使用 concat 方法拼接数组
var newArr = arr.concat([4, 5, 6])

console.log(arr) // [1, 2, 3]
console.log(newArr) // [1, 2, 3, 4, 5, 6]
```

注意： **`concat` 方法不会改变原始数组**



**数组常用方法之 join**

- `join` 是把数组里面的每一项内容链接起来，变成一个字符串
- 可以自己定义每一项之间链接的内容 `join(要以什么内容链接)`
- 不会改变原始数组，而是把链接好的字符串返回

```js
var arr = [1, 2, 3]

// 使用 join 链接数组
var str = arr.join('-')

console.log(arr) // [1, 2, 3]
console.log(str) // 1-2-3
```

- 注意： **join 方法不会改变原始数组，而是返回链接好的字符串**



**数组常用方法之 indexOf**

- `indexOf` 用来找到数组中某一项的索引
- 语法： `indexOf(你要找的数组中的项)`

````js
var arr = [1, 2, 3, 4, 5]

// 使用 indexOf 超找数组中的某一项
var index = arr.indexOf(3)

console.log(index) // 2
````

- - 我们要找的是数组中值为 3 的那一项
- 返回的就是值为 3 的那一项在该数组中的索引
- 如果你要找的内容在数组中没有，那么就会返回 -1

```js

var arr = [1, 2, 3, 4, 5]

// 使用 indexOf 超找数组中的某一项
var index = arr.indexOf(10)

console.log(index) // -1
```





#### 数组常用方法--迭代方法



**数组常用方法之 every some**

- every每个   some 部分

```js
let arr = [10,11,12,13]
let res1 = arr.every(item=>item>10)  //true
let res2 = arr.some(item=>item>12)  //true
let res3 = arr.filter(item=>item>12)  //13
```







**数组常用方法之 forEach**

- 和 `for` 循环一个作用，就是用来遍历数组的
- 语法：`arr.forEach(function (item, index, arr) {})`

```js
var arr = [1, 2, 3]

// 使用 forEach 遍历数组
arr.forEach(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  console.log('数组的第 ' + index + ' 项的值是 ' + item + '，原始数组是', arr)
})
```

- `forEach()` 的时候传递的那个函数，会根据数组的长度执行
- 数组的长度是多少，这个函数就会执行多少回



**数组常用方法之 map**

- 和 `forEach` 类似，只不过可以对数组中的每一项进行操作，返回一个新的数组

```js
var arr = [1, 2, 3]

// 使用 map 遍历数组
var newArr = arr.map(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  return item + 10
})

console.log(newArr) // [11, 12, 13]
```



**数组常用方法之 filter**

- 和 `map` 的使用方式类似，按照我们的条件来筛选数组
- 把原始数组中满足条件的筛选出来，组成一个新的数组返回

```js
var arr = [1, 2, 3]

// 使用 filter 过滤数组
var newArr = arr.filter(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  return item > 1
})

console.log(newArr) // [2, 3]
```



遍历二维数组

```js
let arr =  [
    [100,90,80],
    [10,20,30],
    [1,2,3]  
]

for (let i= 0;i<arr.length;i++){
    console.log(`第${i+1}个人的成绩`)
    
    for (let j= 0; j<arr[i].length;j++){
        console.log(arr[i][j])
    }
}

```





# 二.栈结构

##### 1.什么是栈结构

> 栈（stack）又名堆栈，它是一种运算受限的线性表。限定仅在表尾进行插入和删除操作的线性表。这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。



特点：后进先出即Last in First Out（LIFO）。



##### 2.封装栈结构

> 需要有 push (添加一个元素到栈顶)    pop(出栈)   peek(返回栈顶)   isEmpty(是否为空)  clear(清空)



```js
class Stack{
    #items = []

    push(data){
        this.#items.push(data)
    }

    pop(){
        return this.#items.pop()
    }

    peek(){
        //    return this.items[this.items.length-1]
        return this.#items.at(-1)  //-1取最后一个元素
    }
    isEmpty(){
        return this.#items.length===0
    }

    size(){
        return this.#items.length
    }

    clear(){
        this.#items = []
    }

    toString(){
        return this.#items.join("")
    }
}
```



##### 3.应用

3-1 十进制转二进制

```js
function convert(decNumber){
    let remStack = new Stack()
    let number = decNumber
    let string = ""

    while(number>0){
        remStack.push(number%2)
        number = Math.floor(number/2)
    }

    while(!remStack.isEmpty()){
        string+=remStack.pop()
    }

    return string
}
```



3-2 进制转换法

```js
function convert(decNumber,base){
    let remStack = new Stack()
    let number = decNumber
    let string = ""
    let baseStr = "0123456789ABCDEF"
    while(number>0){ 
        remStack.push(number%base)
        number = Math.floor(number/base)
    }

    while(!remStack.isEmpty()){
        string+= baseStr[remStack.pop()]
    }

    return string
}
```







# 三.队列

##### 1.队列是什么？

> 队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头。队列中没有元素时，称为空队列。

队列的数据元素又称为队列元素。在队列中插入一个队列元素称为入队，从队列中删除一个队列元素称为出队。因为队列只允许在一端插入，在另一端删除，所以只有最早进入队列的元素才能最先从队列中删除，故队列又称为先进先出（FIFO—first in first out）线性表。



##### 2.队列的封装

```js
class Queue {
    #items = {}
    #count = 0
    #lowCount = 0

    //出队  在队列的开头移除某个元素，并且返回
    dequeue() {
        if(this.isEmpty()){
            return undefined
        }
        let res = this.#items[this.#lowCount]
        delete this.#items[this.#lowCount]
        this.#lowCount++
        return res
        //想删除第一个值(lowcount) 删除后索引+1 跳到第二个值
    }

   //入队   在队列末尾加入元素
    enqueue(data) {
        this.#items[this.#count] = data
        this.#count++
        //初始count为0 将第一个值赋给item[0] 
    }

    front() {
        return this.#items[this.#lowCount]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.#count-this.#lowCount
    }

    clear() {
        this.#items = {}
        this.#count = 0;
        this.#lowCount = 0
    }

    toString() {
        let str = ""
        for(let i =this.#lowCount;i<this.#count;i++){
            str += `${this.#items[i]} `
            }
        return str
    }
```

##### 3.队列的应用-击鼓传花

> 思路：将队首的人在计数过后传到队尾，出栈时只出队首的数



```js
function game(list,num){
    let queue = new Queue()//生成新队列
    for(let i=0;i<list.length;i++){
        queue.enqueue(list[i]) //把每一项加入队列
    }

    while(queue.size()>1){
        for(let i=0;i<num;i++){
            queue.enqueue(queue.dequeue()) //先出栈，然后放入队尾
        }
        console.log(queue.dequeue(),"淘汰了")
    }

    return {
        winner:queue.dequeue()
    }
}

game(["kerwin","tiechui","xiaoming","gangdaner","guludunzi"],7)
```





# 四.链表

> 链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。
>
> 使用链表结构可以克服数组链表需要预先知道数据大小的缺点，链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理。但是链表失去了数组随机读取的优点，同时链表由于增加了结点的指针域，空间开销比较大。



**链表的特点**

1.插入、删除数据效率高O(1)级别（只需更改指针指向即可），随机访问效率低O(n)级别（需要从链头至链尾进行遍历）。
2.和数组相比，内存空间消耗更大，因为每个存储数据的节点都需要额外的空间存储后继指针。



##### 1. 单链表

> 每个节点只包含一个指针，即后继指针。

```

```





***



# 十. 排序算法

##### 1.冒泡排序

> 冒泡排序比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至 正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。

```js
function bubbleSort(array) {
    const {length} = array;    //解构赋值，将array.length赋值给array
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                 [array[j],array[j+1]]   =  [array[j+1],array[j]]  
            }
        }
    }
   console.log(array);
   
}


bubbleSort([5,3,2,4,1,6])
```



