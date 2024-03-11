# Write your MySQL query statement below
select customer_id from customer group by customer_id having COUNT(DISTINCT product_key) = (SELECT COUNT(*) FROM Product);
