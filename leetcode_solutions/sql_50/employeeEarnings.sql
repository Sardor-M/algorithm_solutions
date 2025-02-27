SELECT 
    e.name as employee
FROM 
    Employee e
    JOIN Employee manager 
        ON e.managerId = manager.id
WHERE 
    e.salary > manager.salary;