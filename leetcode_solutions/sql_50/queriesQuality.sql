SELECT 
    query_name,
    ROUND(AVG(rating / position), 2) AS quality,  -- quality is AVG(5.00+2.50+0.0005)/3 = 2.50 will return             
    ROUND(AVG(rating < 3) * 100, 2)  AS poor_query_percentage  -- AVG will return (0+0+1)/3 = 0.3333 * 100 = 33.33
FROM 
    Queries
GROUP BY
    query_name;