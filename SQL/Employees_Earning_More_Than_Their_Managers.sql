-- leet code challenge 'Employees Earning More Than Their Managers'
-- problem link https://leetcode.com/problems/Employees-Earning-More-Than-Their-Managers/description/

-- Write your PostgreSQL query statement below
SELECT e2.name as Employee
FROM employee e1, employee e2 
WHERE e1.id = e2.managerID
AND e1.salary < e2.salary;