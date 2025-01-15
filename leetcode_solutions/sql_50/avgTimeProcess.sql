/*
*
* 1661. Average Time of Process per Machine
*
*/

SELECT 
    machine_id,
    ROUND(AVG(processing_time), 3) as processing_time
FROM (
    SELECT 
        machine_id,
        process_id,
        MAX(CASE WHEN activity_type = "end" THEN timestamp END)
            -
        MAX(CASE WHEN activity_type = "start" THEN timestamp END)
            as processing_time
    FROM
        Activity
    GROUP BY
        process_id,
        machine_id
) as processing_time
GROUP BY machine_id
ORDER BY processing_time DESC;