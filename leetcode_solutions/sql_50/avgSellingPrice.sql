SELECT 
    p.product_id,
    ROUND(
        IFNULL(SUM(p.price * u.units) / NULLIF(SUM(u.units), 0), 0), 2
        ) AS avg_price
FROM Prices p
    LEFT JOIN UnitSold u 
        ON p.product_id = u.product_id
            AND u.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY p.product.id;