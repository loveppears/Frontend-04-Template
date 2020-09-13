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

## Chapter 4

![程序语言分类](./pl.png)


## Chapter 8

```Javascript
function toUTF8Array(str) {
    var utf8 = [];
    for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            charcode = ((charcode&0x3ff)<<10)|(str.charCodeAt(i)&0x3ff)
            utf8.push(0xf0 | (charcode >>18), 
                      0x80 | ((charcode>>12) & 0x3f), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}
```

## Chapter 10

```Javascript
Class Human{
     hurt(damage){}
}
```

## chapter 11

Array：Array 的 length 属性根据最大的下标自动发生变化。
Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
bind 后的 function：跟原来的函数相关联。

## 感想

js中对象千奇百怪:
    宿主对象（host Objects）：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。
    内置对象（Built-in Objects）：由 JavaScript 语言提供的对象。
    固有对象（Intrinsic Objects ）：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。
    原生对象（Native Objects）：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。
    普通对象（Ordinary Objects）：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。
