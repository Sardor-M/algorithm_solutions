/**
 *  Rising Temperature.
 * 
 *  Write a solution to find all dates' id with higher temperatures compared to its previous dates (yesterday).
 *  Return the result table in any order.
 * 
 **/

SELECT id
FROM WEATHER w1 
WHERE temperature > (
    SELECT temperature 
    FROM Weather w2
    -- we extract the date time interval and compare the temp value
    WHERE w2.recordDate = DATE_SUB(w1.recordDate, INTERVAL 1 day)
);


