-- leet code challenge 'Combine Two Tables'
-- problem link https://leetcode.com/problems/combine-two-tables/description/

-- Write your PostgreSQL query statement below
SELECT firstName, lastName, city, state FROM Person p LEFT JOIN Address a ON p.personId=a.personId;