## 学习笔记

BFS寻路算法可视化

A* 启发式搜索这个估值函数很重要！


- BNF 四则运算

``` haskell
Expression := AdditiveExpression EOF

AdditiveExpression := MultiplicativeExpression
                    | AdditiveExpression + MultiplicativeExpression
                    | AdditiveExpression - MultiplicativeExpression

MultiplicativeExpression := Number
                    | AdditiveExpression * Number
                    | AdditiveExpression / Number
```

展开后

``` haskell
Expression := AdditiveExpression EOF

AdditiveExpression := Number
                    | MultiplicativeExpression * Number
                    | MultiplicativeExpression / Number
                    | AdditiveExpression + MultiplicativeExpression
                    | AdditiveExpression - MultiplicativeExpression
```
