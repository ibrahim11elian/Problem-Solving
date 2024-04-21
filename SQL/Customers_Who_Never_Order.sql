-- leet code challenge 'Customers Who Never Order'
-- problem link https://leetcode.com/problems/customers-who-never-order/description/

-- Write your PostgreSQL query statement below
SELECT c.name as Customers 
FROM customers c 
WHERE id NOT IN 
(SELECT DISTINCT customerId FROM orders);