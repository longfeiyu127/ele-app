

//一维数组转二维数组
//路径,尺寸
export function handleArray(arr,num){
    let Arr = new Array(Math.ceil(arr.length/num));
    for(var i = 0; i<Arr.length;i++){
        Arr[i] = new Array();
        for(var j = 0; j<num; j++){
            Arr[parseInt(i/num)][i%num] = arr[i]; 
        }
    }
    for(var i = 0; i<arr.length;i++){
        Arr[parseInt(i/num)][i%num] = arr[i]; 
    } 
    return Arr
}

