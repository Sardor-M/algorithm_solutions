package ArraysAndHashing;
import java.util.Arrays;

public class ValisAnagram {
    public static void main(String[] args){
        String s = "racecar";
        String t = "carrace";
        System.out.println(isValidAnagram(s,t));
    }
    public static boolean isValidAnagram(String s, String t){
        //removing white spaces
        s = s.replaceAll("\\s", "");
        t = t.replaceAll("\\s", "");
        boolean status = true;

        // check the length of both strings
        if(s.length() != t.length()){
            status = false;
        } else {
            char [] arrayS = s.toLowerCase().toCharArray();
            char [] arrayT = s.toLowerCase().toCharArray();

            Arrays.sort(arrayS);
            Arrays.sort(arrayT);

            status = Arrays.equals(arrayS, arrayT);
        }
       return status;
    }
}
