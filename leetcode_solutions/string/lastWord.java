package string;

/**
 * 
 * Length of last word
 * 
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * 
 */

public class lastWord {
    public int lengthOfLastWord(String s){
        // we remove the left and right whitespaces
        s = s.trim();

        int lastSpace = s.lastIndexOf(" ");
        if(lastSpace == -1) return s.length();

        int lastIndexOfString = s.length() -1;
        // we return by subtracting the lastindex - spaceIndex 
        // return 11 - 6 = 5
        return lastIndexOfString - lastSpace;
    }
}
