/**
 *  1148. Article Views I
 * 
 *  Write a solution to find all the authors that viewed at least one of their own articles.
 *  Return the result table sorted by id in ascending order.
 * 
 **/

SELECT DISTINCT author_id AS id
FROM Views v
WHERE v.viewer_id = v.author_id
ORDER BY id ASC

