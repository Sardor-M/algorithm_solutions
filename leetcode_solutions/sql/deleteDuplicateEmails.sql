/* 
Table: Person 
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
Id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.

Write a solution to delete all duplicate emails, keeping only one unique email with the smallest id.
*/

DELETE 
    person1 
FROM 
    Person person1,
    Person person2 
WHERE 
    person1.id > person2.id 
AND 
    person1.email = person2.email;