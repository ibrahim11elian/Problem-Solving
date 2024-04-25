-- // leet code challenge 'Game Play Analysis I'
-- // problem link https://leetcode.com/problems/game-play-analysis-i/description/

-- Write your PostgreSQL query statement below
SELECT player_id, min(event_date) as first_login FROM activity GROUP BY player_id;
