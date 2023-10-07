# Case

Merhabalar,

Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

1. city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
2. customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
3. customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.

Kolay Gelsin.

# Solution

```sql
SELECT city.name, country.name FROM city
INNER JOIN country ON city.id = country.id;
```

```sql
SELECT payment_id, first_name, last_name FROM customer
INNER JOIN payment ON customer.payment_id = payment.id;
```

```sql
SELECT rental_id, first_name, last_name FROM customer
INNER JOIN film ON customer.id = film.customer_id
```
