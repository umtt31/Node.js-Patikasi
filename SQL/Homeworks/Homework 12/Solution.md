# Case

Merhabalar,

Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

1. film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
2. film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
3. film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
4. payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.

Kolay Gelsin.

# Solution

```sql
SELECT * FROM film
WHERE length >
(
    SELECT AVG(length) FROM film
);
```

```sql
SELECT COUNT(*) FROM film
WHERE rental_rate =
(
    SELECT MAX(rental_rate) FROM film
);
```

```sql
SELECT * FROM film
WHERE rental_rate = (SELECT MIN(rental_rate) FROM film)
OR
replacement_cost = (SELECT MIN(replacement_cost) FROM film);
```

```sql
SELECT customer_id, COUNT(customer_id) FROM payment GROUP BY customer_id ORDER BY COUNT(customer_id) DESC;
```
