// Problem 901 - Medium
// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

// The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.

// For example, if the price of a stock over the next 7 days were [100,80,60,70,60,75,85], then the stock spans would be [1,1,1,2,1,4,6].
// Implement the StockSpanner class:

// StockSpanner() Initializes the object of the class.
// int next(int price) Returns the span of the stock's price given that today's price is price. 

// Idea: 
// - tạo mảng stocks chưa các obj lưu thông tin giá và span của ngày đó
// - mỗi khi push obj của 1 ngày bất kì vào, lặp từ cuối mảng stocks về trc check ngày nào có price bé hơn bằng price ngày hiện tại 
//   thì cộng với span ngày đó và pop khỏi mảng, việc này giúp ta quét hết các giá trị cần tìm 1 cách ngắn gọn, nhanh hơn 
//   vì đã pop bớt đi 1 số phần tử => độ phức tạp time là O(n) và không gian là O(n) 
// ví dụ : mảng price [100,60,70,75,85] => [{100,1}] => [{100,1},{60,1}] => [{100,1},{70,2}] => [{100,1},{75,3}] 

var StockSpanner = function() {
    this.stocks= []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let res= 1
    
    if( this.stocks.length==0 ){
        this.stocks.push({price: price, span:1})
    }else{
        while( this.stocks.length>0 && this.stocks[this.stocks.length-1].price<=price ){    
            res += this.stocks[this.stocks.length-1].span
            this.stocks.pop()
        }

        this.stocks.push({price: price, span:res})
    }
    
    return res
};

var obj = new StockSpanner()
obj.next(100); // return 1
obj.next(80);  // return 1
obj.next(60);  // return 1
obj.next(70);  // return 2
obj.next(60);  // return 1
obj.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
obj.next(85);

console.log(obj)