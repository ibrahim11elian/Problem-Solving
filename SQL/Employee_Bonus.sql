-- leet code challenge 'Employee Bonus'
-- problem link https://leetcode.com/problems/employee-bonus/description/

-- Write your PostgreSQL query statement below
SELECT e.name, bonus 
FROM employee e 
LEFT JOIN bonus b 
ON e.empId=b.empId 
WHERE bonus<1000 
OR bonus IS null;