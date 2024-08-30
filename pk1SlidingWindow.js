// maximum continuous subarray

function lengthOfLongestSubstringWithoutRepeating(s){
    const map = new Array(256).fill(0);
    console.log(map)
    let max = 0;
    let j=0;
    for(let i=0; i<s.length;i++){
        const c = s.charAt(i); // character at 0, 1, 2, 3
        console.log("c : ", c)
        map[c.charCodeAt(0)]++; // update state using s[i]
        console.log("c.charCodeAt(0) : ", c.charCodeAt(0))
        console.log("map[c.charCodeAt(0)] : ", map[c.charCodeAt(0)])

        // c :  a
        // c.charCodeAt(0) :  97
        // map[c.charCodeAt(0)] :  1

        // Shrink the left edge while there's a duplicate character
        while(map[c.charCodeAt(0)] > 1){
            const leftChar = s.charAt(j);
            console.log("leftChar : ", leftChar)
            map[leftChar.charCodeAt(0)]--;
            console.log("leftChar.charCodeAt(0) : ", leftChar.charCodeAt(0))
            console.log("map[leftChar.charCodeAt(0)] : ", map[leftChar.charCodeAt(0)])
            j++;
        }

        // leftChar :  a
        // leftChar.charCodeAt(0) :  97
        // map[leftChar.charCodeAt(0)] :  1

        // Update the maximum length of the substring found so far
        max = Math.max(max, i-j+1);
    }
    return max; // return the length of the longest substring
}

console.log(lengthOfLongestSubstringWithoutRepeating("abcabcbb")) // 3
console.log(lengthOfLongestSubstringWithoutRepeating("bbbbb")) // 1
console.log(lengthOfLongestSubstringWithoutRepeating("pwwkew")) // 3


/////////////////--------------------------------------------

function lengthOfLongestSubstringKDistinct(s, k) {
    const map = new Array(256).fill(0);
    let max = 0, cnt = 0;
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        map[c.charCodeAt(0)]++;

        if (map[c.charCodeAt(0)] === 1) {
            cnt++;
        }

        while (cnt > k) {
            const leftChar = s.charAt(j);
            map[leftChar.charCodeAt(0)]--;

            if (map[leftChar.charCodeAt(0)] === 0) {
                cnt--;
            }
            j++;
        }

        max = Math.max(max, i - j + 1);
    }

    return max;
}

console.log('"eceba", 1 : ', lengthOfLongestSubstringKDistinct("eceba", 1)) // 1
console.log('"eceba", 2 : ', lengthOfLongestSubstringKDistinct("eceba", 2)) // 3
console.log('"eceba", 3 : ', lengthOfLongestSubstringKDistinct("eceba", 3)) // 4
console.log('"eceba", 4 : ', lengthOfLongestSubstringKDistinct("eceba", 4)) // 5
console.log('"eceba", 5 : ', lengthOfLongestSubstringKDistinct("eceba", 5)) // 5
console.log('"aa", 1 : ', lengthOfLongestSubstringKDistinct( "aa", 1)) // 2
console.log('"aa", 2 : ', lengthOfLongestSubstringKDistinct( "aa", 2)) // 2