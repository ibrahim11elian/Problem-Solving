-- leet code challenge 'Delete Duplicate Emails'
-- problem link https://leetcode.com/problems/delete-duplicate-emails/description/

-- Write your PostgreSQL query statement below
DELETE FROM person WHERE id IN
(SELECT p.id 
FROM Person p, Person q 
WHERE p.Id > q.Id 
AND q.Email=p.Email); 