public class areOccurrencesEqual {
    public boolean areOccurrencesEqual(String s) {
        HashMap<Character, Integer> frequencyMap = new HashMap<>();
        for(char c : s.toCharArray()) {
            // buyerda update qilamiz
            frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);
        }
        // birinchi frequencyni olamiz
        int firstFrequency = frequencyMap.values().iterator().next();
        for(int frequency: frequencyMap.values()) {
            if(frequency != firstFrequency){
                // agar bironta freq boshqacha bo'lsa false qaytaramiz
                return false;
            }
        }
        return true;
    }
}