-- leet code challenge 'Duplicate Emails'
-- problem link https://leetcode.com/problems/Duplicate-Emails/description/

-- Write your PostgreSQL query statement below
SELECT email from Person
group by email
having count(email) > 1;