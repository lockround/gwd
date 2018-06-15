export const mapIntoObjects = (arr) => {
    return Object.keys(arr).map(key => arr[key]).reduce((acc,item) => {
        acc[item._id] = item;
        return acc;
    },{});
}


export const findObjBasedOnBlock = (block,arr) => {
    return arr.find(obj => obj['BLOCK'] === block)
}


export const findDistrictsB = (w,arr) => {
    let a = 0;
    return arr.reduce((acc,item) => {
       acc[a++] = item[w];
       return acc;
    },[]).filter((el,pos,arra) => {
        return arra.indexOf(el) === pos
    })
}




