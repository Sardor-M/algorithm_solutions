function minimumOperations(nums: number[]): number {
    // unique elem bo'lsa yoki bosh bolsa 0 return bo'ladi
    const uniqElem = new Set(nums);
    if(uniqElem.size === nums.length){
        return 0;
    }

    // turli xil opnlar sonini sanab ko'ramiz, har doimn 3ta elementni olib tashlab
    for(let opn = 1; opn <= Math.ceil(nums.length / 3); opn++){
        // birinchi 3 * opnda elementlarni olib tashlab 
        // takror bolmaganligini tekshiramiz
        const remaining = nums.slice(3 * opn);

        if(remaining.length === 0){
            return opn;
        }
        // remaining elemlar esa takror emasligini tekshiramiz
        const remaningUniq = new Set(remaining);
        if(remaningUniq.size === remaining.length){
            return opn;
        }
    }
    // 
    return Math.ceil(nums.length / 3);
};