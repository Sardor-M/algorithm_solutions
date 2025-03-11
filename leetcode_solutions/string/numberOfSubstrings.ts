function numberOfSubstrings(s: string): number {
    let left = 0;
    let right = 0;
    let result = 0;

    let count_a = 0;
    let count_b = 0;
    let count_c = 0;
    //   ^ sliding window algorithm
    // " a | b | c | a | b | c"

    // s = "abcabc"
    //      ^      left=0, right=0, result=0, count_a=0, count_b=0, count_c=0

    while (right < s.length) {
        if (s[right] === "a") count_a++;
        if (s[right] === "b") count_b++;
        if (s[right] === "c") count_c++;

        while (count_a > 0 && count_b > 0 && count_c > 0) {
            result += s.length - right;

            if (s[left] === "a") count_a--;
            if (s[left] === "b") count_b--;
            if (s[left] === "c") count_c--;
            left++;
        }
        right++;
    }
    return result;
};

// console.log(numberOfSubstrings("abcabc"));
