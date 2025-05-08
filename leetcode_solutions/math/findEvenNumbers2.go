/**
 * Time Complexity: O(n) - given the constraints we had
 * Space Complexity: O(1)
 */
func findNumbers(nums []int) int {
    count := 0 

	for _, num := range nums {
		tempNum := num 
		numCount := 0 

        if tempNum == 0 {
             numCount = 1
        } else {
            for tempNum > 0 {
                tempNum = tempNum / 10 
                numCount++
            }
        }

		// we check if the digit count is even
		if numCount % 2 == 0 {
			count++ 
		}
	}
	return count 
}
