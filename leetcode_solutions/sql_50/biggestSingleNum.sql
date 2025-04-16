# Write your MySQL query statement below
SELECT MAX(num) AS NUM
FROM (
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING COUNT(*) = 1
) AS single_num;
