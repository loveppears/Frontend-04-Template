## Chapter 2

### Arithmetic productions of grammar

```haskell
<Add> ::= <Mul> | <Add> "+" <Mul> | <Add> "-" <Mul>
<Mul> ::= <Num> | <Mul> "*" <Num> | <Mul> "/" <Num>
<Par> ::= <Par> | "(" <Add>")"
<Res> ::= <Num> | <Par> "+" <Num>  |
    <Par> "-" <Num> |
    <Par> "*" <NuM> |
    <Par> "/" <Num> | ""
```
