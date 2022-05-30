// Problem 146 - Medium
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Idea: 
//  - de luu va truy xuat cac key voi do phuc tap O(1) chung ta se dung kieu du lieu Map 
//  - de the hien thu tu muc do su dung cua cac phan tu ( it su dung nhat hay moi duoc su dung ) va put voi do phuc tap O(1) ta se dung 1 double link list 
//  - khi get 1 key ta se kiem tra co key do ko, neu co thi xoa node cua key do trong list va day no len tail cua list (phan tu duoc su dung gan day nhat)
//  - khi put 1 key :
//             + neu cache chua day thi them vao map va add key do vao head cua list
//             + neu cache da day thi xoa key o head trong list va map va add key do vao tail cua list   
//             + neu add 1 key da ton tai thi get key do ra va cap nhat key o tail value moi
//  - trong double linke list cua chung ta, head tuong ung voi key it duoc su dung nhat tail tuong ung voi key moi duoc su dung

 var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
// khoi tao double link list    
    this.tail= {}
    this.head = {} 
    
    this.head.next = this.tail 
    this.tail.prev = this.head
};


LRUCache.prototype.get = function(key) {
    if( this.cache.has(key) ){
        let nodeNow = this.cache.get(key) // nodeNow duoc lay ra tu map giong voi node trong linklist nen luc nay nodeNow tro den chinh node trong list
        //remove node co key duoc get trong list  
        nodeNow.prev.next = nodeNow.next
        nodeNow.next.prev = nodeNow.prev
        //day node nay xuong tail   
        this.tail.prev.next = newNode
        newNode.prev = this.tail.prev
        newNode.next = this.tail
        this.tail.prev = newNode  

        return node.value
    }else{
        return -1
    }
};


LRUCache.prototype.put = function(key, value) {
    if( this.cache.get(key)!==-1 ){ // neu put 1 key da ton tai (khi thuc hien get thi no da thuc hien xoa day node key do ve tail)
        this.tail.prev.value = value // update gia tri cho key cu
    }else{
        if( this.cache.size === this.capacity ){
            this.cache.delete(this.head.next.key)
            this.head.next = this.head.next.next  
            this.head.next.prev = this.head
        }

        let newNode = { value ,key}

        this.cache.set(key, newNode)

        newNode.next = this.tail
        newNode.prev = this.tail.prev 
        this.tail.prev.next = newNode    
        this.tail.prev = newNode
    }
};

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1))    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2))     // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
console.log(lRUCache)
