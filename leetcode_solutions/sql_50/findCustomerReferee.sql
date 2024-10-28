/**
 *  N 584. Find Customer Referee
 * 
 *  Find the names of the customer that are not referred by the customer with id = 2.
 *  Return the result table in any order.
 *
 *  Customer table:
 *  +----+------+------------+
 *  | id | name | referee_id |
 *  +----+------+------------+
 *  | 1  | Will | null       |
 *  | 2  | Jane | null       |
 *  | 3  | Alex | 2          |
 *  | 4  | Bill | null       |
 *  | 5  | Zack | 1          |
 *  | 6  | Mark | 2          |
 *  +----+------+------------+
 **/

 SELECT name 
 FROM Customer
 WHERE id NOT IN (
    SELECT id 
    FROM CUSTOMER 
    WHERE referee_id = 2
 )
