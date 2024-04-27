-- leet code challenge 'Rank Scores'
-- problem link https://leetcode.com/problems/rank-scores/description/

-- Write your PostgreSQL query statement below
SELECT
score,
DENSE_RANK() OVER (ORDER BY score DESC) AS rank
FROM Scores
ORDER BY score DESC;