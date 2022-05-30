// Problem 561 - Easy
// Given an integer array nums of 2n integers, group these integers into n pairs 
// (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.  

//Idea: 
//   - bài toán đưa về sắp xếp mảng tăng dần và kết quả thu đc là tổng của các phần tử chẵn
//   - chứng minh : 
//         + giả sử ta có a1<=b1, a2<=b2,...
//         + khi đó sa= a1+a2+..+an là giá trị cần tìm, s= a1+..+an+b1+..+bn là tổng dãy nên ko đổi
//         + đặt sd = b1-a1 + .. bn-an tức là tổng của khoảng của các cặp
//         + ta có sa = (s-sd)/2 => sa max khi sd min mà sd min khi mảng được sắp xếp => ...    

// đọ phức tạp phụ thuộc vào thuật toán sort mảng 

var swap = (nums,l,r) =>{
    let temp = nums[l]
    nums[l]= nums[r]
    nums[r]= temp
} 

var arrayPairSum = function(nums) {
    let n =nums.length
    
    let partition = (nums,low,high) => {
        let l =low, r=high-1
        let pivot = nums[high]
        
        while(true){
            while(r>=l && nums[r]>pivot) r--
            while(l<=r && nums[l]<pivot) l++
            if(l>=r) break
            
            swap(nums,l,r)
            l++
            r--     
        }
        swap(nums,l,high) 
        return l
    }

    let quickSort = (nums,l,r) => {
        while(l<r){
            let pivot = partition(nums,l,r)

            quickSort(nums,l,pivot-1)
            quickSort(nums,pivot+1,r)
        }
    }
    quickSort(nums,0,n-1)
    console.log(nums)
    
    return nums.filter((val,index) => index%2==0).reduce(((a,b) => a+b))
};

console.log(arrayPairSum([1,4,3,2]))