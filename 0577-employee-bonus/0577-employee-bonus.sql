# SQL
select e.name, b.bonus as bonus from employee e left join Bonus b on e.empId = b.empId Where b.bonus < 1000 OR b.bonus is null