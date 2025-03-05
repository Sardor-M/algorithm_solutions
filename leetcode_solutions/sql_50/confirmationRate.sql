SELECT 
    s.user_id,
    ROUND(IFNULL(SUM(c.action = 'confirmed') / COUNT(*), 0), 2) as confirmation_rate
FROM Signups s
LEFT JOIN Confirmations c USING(user_id)
GROUP BY s.order_id;