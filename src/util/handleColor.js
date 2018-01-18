

//十六进制转RGB
//路径,尺寸
export function handleColor(sColor){
    if(sColor){
        sColor=sColor.toLowerCase();
        if(sColor.length === 4){  
            var sColorNew = "#";  
            for(var i=1; i<4; i+=1){  
                sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));     
            }  
            sColor = sColorNew;  
        }  
        var sColorChange = [];  
        for(var i=1; i<7; i+=2){  
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));    
        }  
        return "RGB(" + sColorChange.join(",") + ")";  
    }else{
        return ''
    };  
}

