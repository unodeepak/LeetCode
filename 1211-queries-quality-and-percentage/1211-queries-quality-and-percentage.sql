# # Write your MySQL query statement below
select query_name, ROUND(SUM(rating/position) / (count(query_name)), 2) as quality, ROUND(SUM(case when rating < 3 then 1 else 0 end) * 100 / count(*) ,2) as  poor_query_percentage from Queries where query_name is not null group by query_name

# SELECT 
#     query_name,
#     ROUND(AVG(CAST(rating AS DECIMAL) / position), 2) AS quality,
#     ROUND((SUM(CASE WHEN rating < 3 THEN 1 ELSE 0 END) / COUNT(*)) * 100, 2) AS poor_query_percentage
# FROM Queries where query_name is not null
# GROUP BY query_name;