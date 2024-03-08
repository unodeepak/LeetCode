# Write your MySQL query statement below
# e=employee, p = project
SELECT DISTINCT(p.project_id) as project_id, ROUND(AVG(e.experience_years), 2) as average_years from project p left join Employee e on p.employee_id = e.employee_id group by p.project_id