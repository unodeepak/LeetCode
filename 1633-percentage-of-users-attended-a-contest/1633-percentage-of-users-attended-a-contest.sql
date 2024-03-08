# Write your MySQL query statement below
# select contest_id, ROUND(COUNT(user_id) * 100 /(SELECT COUNT(DISTINCT(user_id)) from register),2) as percentage from register group by contest_id order by percentage desc, contest_id

# SELECT 
#     contest_id,
#     ROUND(COUNT(user_id) * 100.0 / (SELECT COUNT(DISTINCT user_id) FROM Register), 2) AS percentage
# FROM Register
# GROUP BY contest_id
# ORDER BY percentage DESC, contest_id

SELECT 
    contest_id,
    ROUND(COUNT(user_id) * 100.0 / (SELECT COUNT(DISTINCT user_id) FROM Users), 2) AS percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, contest_id;