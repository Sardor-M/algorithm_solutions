/**
 * 
 * Time complexity is O(n) + O(1) × O(n) = O(n).
 * 
 * Space complexity is O(1): 
 * the uniqueMiddleChars set stores at most 26 unique characters: O(1)
 * 
 */


function countPalindromicSubsequence(s: string): number {
    const first = {};
    const last = {};

    // we first get the first and last occurence 
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        if(first[char] === undefined){
            first[char] = i;
        }
        last[char] = i;
    }

    let count = 0;
    // unique characterlarni iterate qilamiz (from first)
    for(const char in first){
        if(first[char] < last[char]){
            const uniqMiddleChars = new Set();
            // first and last character occurence orasida iterate qilamiz
            for(let i = first[char] + 1; i < last[char]; i++){
                uniqMiddleChars.add(s[i]);
            }

            // we add the size of set to the count
            count += uniqMiddleChars.size;
        }
    }
    return count;
};