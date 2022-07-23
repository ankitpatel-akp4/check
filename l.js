// let nums  =[1,2,3,1]
// let a = []

// let dic = {}
//     // nums.forEach((el,i)=>{
//     //     console.log(el,i)
//     //     if(dic[el] == undefined){
            
//     //         dic[el] = []
            
        
//     //     }else{
//     //         dic[el] = dic[el].push(i)
//     //     }   
//     // })
//     // console.log(dic)
// for (let i = 0, len = nums.length; i < len; i++) {
//     if(dic[nums[i]]){
//         dic[nums[i]].push(i)
//     }else{
//         dic[nums[i]] = [i]
//     }
// }
// console.log(dic);
 longestSubarr()
function  longestSubarr(){
    // arr.sort((a,b)=>(a-b));
arr = [62, 62, 32, 1 ,12, 18, 81]
   let temp = 1;
    for(let i = 0;i<arr.length;i++){
        let count = 1;
    for(let j = i;j<arr.length-1;j++){
        if(arr[j]<arr[j+1]){
            count++;
            console.log(count,temp)
            if(temp<count){
                temp = count;
            }
        }else{
            console.log(count,temp,74837);
                break;
       }
    }


    }


     console.log(temp)
}
