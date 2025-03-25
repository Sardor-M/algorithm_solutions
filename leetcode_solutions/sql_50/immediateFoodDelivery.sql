WITH IsFirstOrder AS (
    SELECT 
        customer_id,
        order_date,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id    -- we isolate the each customer orders
            ORDER BY order_date         -- and process them separately
        ) AS row_num,
        customer_pref_delivery_date 
    FROM 
        Delivery
)

SELECT 
    ROUND(
        SUM(CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END)
            *  100.0 /  COUNT(*), 2 
    )  AS immediate_percentage
FROM 
    IsFirstOrder
WHERE row_num = 1;