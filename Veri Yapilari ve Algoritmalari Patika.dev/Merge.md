# Merge Sort

[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

## Cozum

1. Dizi ikiye bolunur => [16,21,11], [8,12,22]
2. Diziler ikiye bolunur => [16,21] [11] , [8,12] [22]
3. Elementler karsilastirilarak uclu kumeler olustururlar => [11,16,21], [8,12,22]
4. Siralanmis son hali bulmak icin iki kume karsilastirilarak yeni kume olustururlar => [8,11,12,16,21,22]

## Big-O

O(nLogn)
