SELECT
    e.name,
    b.bonus                     -- bonus amount can be null              
FROM Employee e
    LEFT JOIN Bonus b           
        USING(empId)            -- join by employee id  
WHERE 
    b.bonus < 1000              -- employees with less than 1000            
    OR
    b.bonus IS NULL             -- with no bonus record               
ORDER BY   
    e.name,
    b.bonus