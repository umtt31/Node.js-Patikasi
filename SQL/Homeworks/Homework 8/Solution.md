# Case

Merhabalar,

1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

Kolay Gelsin.

# Solution

```sql
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    birtdate DATE,
    email VARCHAR(100)
);
```

```sql
INSERT INTO employee (name, birthdate, email) VALUES ('Winifred', '1991-07-20', 'wvassar0@washington.edu');
INSERT INTO employee (name, birthdate, email) VALUES ('Esdras', '1970-11-10', 'ebeade1@noaa.gov');
INSERT INTO employee (name, birthdate, email) VALUES ('Care', '1960-05-10', 'ccawsy2@technorati.com');
INSERT INTO employee (name, birthdate, email) VALUES ('Stanford', '1952-10-18', 'svarndell3@biblegateway.com');
INSERT INTO employee (name, birthdate, email) VALUES ('Levi', '1985-01-14', 'lborsi4@forbes.com');
INSERT INTO employee (name, birthdate, email) VALUES ('Corinna', '1989-02-12', 'csouthward5@biglobe.ne.jp');
INSERT INTO employee (name, birthdate, email) VALUES ('Niall', '1987-08-03', 'npervoe6@naver.com');
INSERT INTO employee (name, birthdate, email) VALUES ('Gun', '1975-03-13', 'gmccaughen7@phoca.cz');
INSERT INTO employee (name, birthdate, email) VALUES ('Cinnamon', '1944-05-25', 'cshellum8@state.tx.us');
INSERT INTO employee (name, birthdate, email) VALUES ('Mattie', '1906-04-25', 'marnow9@sina.com.cn');
INSERT INTO employee (name, birthdate, email) VALUES ('Jocko', '1942-10-24', 'jhairyesa@xrea.com');
INSERT INTO employee (name, birthdate, email) VALUES ('Christin', '1974-07-17', 'csmillieb@chron.com');
INSERT INTO employee (name, birthdate, email) VALUES ('Clint', '1912-11-15', 'cletixierc@bluehost.com');
INSERT INTO employee (name, birthdate, email) VALUES ('Robbert', '1935-07-10', 'rchappelld@people.com.cn');
INSERT INTO employee (name, birthdate, email) VALUES ('Percy', '1919-04-05', 'pastlese@4shared.com');

```

```sql
UPDATE employee
SET name = 'ahmet'
    birtdate = '1999-12-12'
    email = 'ahmet@hotmail.com'
WHERE id = 1;

UPDATE employee
SET name = 'mehmet'
    birthdate = '2002-12-23'
    email = 'mehemt@x.com'
WHERE id = 2;

UPDATE employee
SET name = 'can'
    birthdate = '1999-12-27'
    email = 'mami@xyz.com'
WHERE id = 12;

UPDATE employee
SET name = 'umut'
    birthdate = '2002-12-12'
    email = 'umut@s.com'
WHERE id = 4;

UPDATE employee
SET name = 'mete'
    birthdate = '2006-12-12'
    email = 'mete@f.com'
WHERE id = 5;
```

```sql
DELETE employee
WHERE id = 1

DELETE employee
WHERE id = 2

DELETE employee
WHERE id = 3

DELETE employee
WHERE id = 4

DELETE employee
WHERE id = 5
```
