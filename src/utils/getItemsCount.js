export function getItemsCount(cartCtx){
    let count=0;
    const categories=[];
    const items=[];
    Object.keys(cartCtx)
    .map(k=>cartCtx[k])
    .map(r => {
      Object.keys(r).map(ck=>categories.push(r[ck])); 
    });
    categories.map(c=>(Object.keys(c)).map(ik=>items.push(c[ik].itemCount)))
    items.map(i=>count+=Number(i))
    return count;
}