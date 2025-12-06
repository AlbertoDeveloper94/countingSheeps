let list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
let list2 = [ false, false, false ]

function countSheeps(list){
    let count = 0;

    if(!list.includes(true)){
        return console.log("UPS!!! Wolfs eaten Sheeps")
      }
    else{
        for(let i=0;i<list.length;i++){
            if(list[i]===true){
                count++;
            }
        }
        return console.log(count);
      }
}

countSheeps(list1);
