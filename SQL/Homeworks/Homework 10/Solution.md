# Case

Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

1. city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
2. customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.
3. customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.

Kolay Gelsin.

# Solution

```sql
SELECT city.name, country.name FROM city
LEFT JOIN country
ON city.country_id = country.id;
```

```sql
SELECT payment_id, first_name, last_name FROM payment
RIGHT JOIN customer
ON customer.id = payment.customer_id;
```

```sql
SELECT rental_id, first_name, last_name FROM customer
FULL JOIN payment
ON customer.id = rental.customer_id
```
