# Write your MySQL query statement below
select p.product_name, sum(o.unit) as unit from products p left join orders o on p.product_id = o.product_id where year(o.order_date) = 2020 and month(o.order_date) = 2 group by o.product_id having sum(unit) > 99 

# o.unit >= 100 and