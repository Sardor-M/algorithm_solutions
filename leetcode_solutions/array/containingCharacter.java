package array;

/**
 * 
 * You are given a 0-indexed array of strings words and a character x.
 * Return an array of indices representing the words that contain the character x.
 * Note that the returned array may be in any order.
 * 
 */

class containingCharacter {
    public List<Integer> findWordsContaining(String[] words, char x) {
        // we use list to store the indices
        List<Integer> indices = new ArrayList();

        for(int i = 0; i < words.length; i++){
            if (words[i].indexOf(x) != -1) {
                indices.add(i);
            }
        }

        return indices;
    }
}


