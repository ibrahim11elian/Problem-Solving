
// leet code challenge 'Longest Palindromic Substring'
// problem link https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    let max = [0, 1];
    for (let i = 0; i < len; i++) {

        let even = checkPalindrome(i - 1, i, s);
        let odd = checkPalindrome(i - 1, i + 1, s);
        let curMax = even[1] - even[0] > odd[1] - odd[0] ? even : odd;

        max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
    }
    return s.slice(max[0], max[1]);
};

let checkPalindrome = (left, right, s) => {
    let len = s.length;
    while (left >= 0 && right < len) {
        if (s[left] !== s[right]) break;
        left--;
        right++;
    }
    return [(left + 1), right];
};

console.log(longestPalindrome('azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc'));