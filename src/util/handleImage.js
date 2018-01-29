
import Api from '../api'

//处理图片路径方法
//路径,尺寸
export function handleImage(path,size){
    if(path){
        let type = path.endsWith('png')?'.png':'.jpeg';
        return Api.IMAGE_HOST + path + type
        +`?imageMogr/format/webp/thumbnail/!${size}x${size}r/gravity/Center/crop/${size}x${size}/`
    }else{
        return ''
    }
}

export function handleBgImage(path){
    if(path){
        let path2=path.replace(/!130x130r\/gravity\/Center\/crop\/130x130\/$/,'!40p/blur/50x40/');
        return path.replace(/!130x130r\/gravity\/Center\/crop\/130x130\/$/,'!40p/blur/50x40/');
    }else{
        return ''
    }
}

