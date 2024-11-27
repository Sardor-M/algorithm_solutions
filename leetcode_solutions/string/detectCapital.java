package string;

/**
 * 
 * Detecrt Capital
 * 
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 * Given a string word, return true if the usage of capitals in it is right.
 * 
 */

public class detectCapital {
    public boolean detectCapitalUse(String word) {
        
        int inputLength = word.length();
        boolean capitalLetter = true;
        boolean lowerLetter = true;
        boolean firstCapThenLower = Character.isUpperCase(word.charAt(0));

        for(int i = 0; i < inputLength; i++){
            char ch = word.charAt(i);
            if(Character.isUpperCase(ch)){
                lowerLetter = false;
                if(i > 0){
                    firstCapThenLower = false;
                }
            } else {
                capitalLetter = false;
            }
        }
        return capitalLetter || lowerLetter || firstCapThenLower;
    }
    
}
