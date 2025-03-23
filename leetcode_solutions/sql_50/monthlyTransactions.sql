SELECT 
    DATE_FORMAT(trans_date, '%Y-%m') AS month,
    country,
    COUNT(*) AS trans_count,
    SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count,
    SUM(amount) as trans_total_amount,
    SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount
FROM 
    Transactions
GROUP BY 
    DATE_FORMAT(trans_date, '%Y-%m'),
    country;



/**
*
*    +----------+---------+-------------+----------------+--------------------+-----------------------+
*    | month    | country | trans_count | approved_count | trans_total_amount | approved_total_amount |
*    +----------+---------+-------------+----------------+--------------------+-----------------------+
*    | 2018-12  | US      | 2           | 1              | 3000               | 1000                  |
*    | 2019-01  | US      | 1           | 1              | 2000               | 2000                  |
*    | 2019-01  | DE      | 1           | 1              | 2000               | 2000                  |
*    +----------+---------+-------------+----------------+--------------------+-----------------------+
*
**/