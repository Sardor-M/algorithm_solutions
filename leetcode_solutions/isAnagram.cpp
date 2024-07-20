#include <string>
#include <iostream>
#include <unordered_map>

class Solution {;
    public: 
        bool isAnagram(std::string s, std::string t){
            if(s.length() != t.length()){
                return false;
            }
            // uses hash map internally
            std::unordered_map<char, int> count;

            for (char c: s) {
                count[c]++;
            }

            for (char c: t) {
                if(count[c] == 0){
                    return false;
                }
                count[c]--;
            }
        return true;
    }
};