class Solution {
    public String decodeMessage(String key, String message) {
        StringBuilder decoded = new StringBuilder();
        Map<Character, Character> cipher = new HashMap<>();
        // 'a' has the Unicode of 97
        char substitute = 'a';

        for (char c : key.toCharArray()) {
            if (c == ' ')
                continue;
            if (!cipher.containsKey(c)) {
                cipher.put(c, substitute);
                // by incrementing, we move to next character alphabetically
                substitute++;
            }
        }

        for (char c : message.toCharArray()) {
            decoded.append(c == ' ' ? ' ' : cipher.get(c));
        }
        return decoded.toString();
    }
}