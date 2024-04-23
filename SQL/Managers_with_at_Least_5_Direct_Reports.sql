-- // leet code challenge 'Managers with at Least 5 Direct Reports'
-- // problem link https://leetcode.com/problems/managers-with-at-least-5-direct-reports/description/

-- Write your PostgreSQL query statement below
SELECT e.name 
FROM employee e 
WHERE id 
IN 
(SELECT managerId 
FROM employee 
GROUP BY managerId 
HAVING COUNT(managerId)>=5);