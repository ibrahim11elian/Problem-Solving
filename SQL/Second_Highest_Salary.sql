-- leet code challenge 'Second Highest Salary'
-- problem link https://leetcode.com/problems/second-highest-salary/description/

-- Write your PostgreSQL query statement below
SELECT max(salary) AS SecondHighestSalary
FROM Employee 
WHERE Salary <> (SELECT max(salary) FROM Employee)