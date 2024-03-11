# Write your MySQL query statement below
# delete from person where email 

# DELETE FROM person WHERE id NOT IN (SELECT MAX(id) AS MaxRecordID FROM person GROUP BY email);
# WITH CTE([email], [id], DuplicateCount) AS (SELECT [email], [id], ROW_NUMBER() OVER(PARTITION BY [id], [email], ORDER BY ID) AS DuplicateCount FROM person DELETE FROM CTE WHERE DuplicateCount > 1;

DELETE a1
FROM person a1, person a2
WHERE a1.email = a2.email
  AND a1.id > a2.id;