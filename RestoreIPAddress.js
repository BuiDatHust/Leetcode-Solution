// Problem 92- Medium
// A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

// Idea: Su dung de quy de tim ra tat ca cac ip hop le voi rang buoc cac so nguyen ngan cach boi dau cham phai trong khoang 0-255
// case dac biet: khi de quy cat duoc chuoi bat dau bang 0 => chi lay gia tri 0 va de quy tiep trang thai khac, bo cac nhanh con lai cua trang thai do
// Solution : Time Complexity : O(3^n) , Space Complexity: O(n)

var restoreIpAddress = (s) =>{
    let arr = []
    
    const solve = (temp, countSegments, start) =>{
        if( countSegments==4 && start==s.length ){ // neu so dau cham bang 3 va duyet duoc het string thi push vao arr
            arr.push(temp)
        }

        if( countSegments<4 ){
            for(let i = start; i<start+3; i++){ // duyet 3 trang thai tiep theo co the xay ra tu vi tri start
                let num = s.slice(start,i+1)
                if( num<=255 ){
                    solve(temp+ (temp=='' ? '' : '.') + num, countSegments+1, i+1) // neu temp='' tuc dang o trang thai dau tien thi khong cong them dau '.'
                    if(num==0) break // neu chuoi cat ra bat dau bang 0 thi chi lay khong va de quy tiep trang thai khac, bo cac nhanh con lai cua trang thai do
                }else{
                    break // neu lon hon 255 thi khong duyet cac nhanh con lai vi chac chan lon hon 255, de quy trang thai khac
                }
            }
        }
    }

    solve('', 0,0)

    return arr
}

console.log(restoreIpAddress("101023"))