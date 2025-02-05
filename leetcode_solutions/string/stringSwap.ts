/**
 * 
 * 1790. Check if One String Swap Can Make Strings Equal 
 * 
 * You are given two strings s1 and s2 of equal length. 
 * A string swap is an operation where you choose two indices 
 * in a string (not necessarily different) and swap the characters at these indices.
 * 
 **/

function areAlmostEqual(s1: string, s2: string): boolean {
    if(s1 === s2) return true;

    const diffValues: number[] = [];
    
    // indices match bolmaganini topamiz
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            diffValues.push(i);
        }
    }

    // mismatch bo'lmasa stringlar bir xil 
    if(diffValues.length === 0) return true;
    if(diffValues.length > 2 ) return false;

    // mismatch indiceslarni saqlaymiz
    const firstIdx = diffValues[0];
    const secondIdx = diffValues[1];
    
    // ikkita mos kelmagan belgilarni almashtirish ularni equal qiladimi ?
    const swap = s1[firstIdx] === s2[secondIdx] && s1[secondIdx] === s2[firstIdx];

    return swap;
}