-- leet code challenge 'Project Employees I'
-- problem link https://leetcode.com/problems/project-employees-i/description/

-- Write your PostgreSQL query statement below
SELECT p.project_id , ROUND(AVG(e.experience_years),2) AS  average_years 
FROM employee e JOIN project p
ON e.employee_id=p.employee_id
GROUP BY project_id;