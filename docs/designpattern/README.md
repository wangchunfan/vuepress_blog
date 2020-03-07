---
title: 设计模式
---

[GitHub源码](https://github.com/wangchunfan/DesignPatterns)

源码包分类

- headfirst：《headfirst 设计模式》代码
- dahua：《大话设计模式》代码
- wang.chunfan：其它网上来源


>模式：在某情境下，针对某问题的某种解决方案。

# 设计模式分类

- 创建型：将对象实例化，这类模式都提供一个方法，将客户从所需要实力化的对象中解耦。
    - 工厂方法模式（Factory Method）
    - 抽象工厂模式（Abstract Factory）
    - 建造者/生成器模式（Builder）
    - 原型模式（Prototype）
    - 单例模式(Singleton) 
- 结构型：把类或对象组合到更大的结构中
    - 适配器模式(Adapter)
    - 桥接模式（Bridge）
    - 组合模式（Composite）
    - 装饰器模式（Decorator）
    - 门面模式（Facade）
    - 享元模式（Flyweight）
    - 代理模式（Proxy） 
- 行为型：涉及到类和对象如何交互及分配职责
    - 解释器模式（Interpreter）
    - 模板方法模式（Template Method）
    - 责任链模式（Chain of Responsibility）
    - 命令模式（Command）
    - 迭代器模式（Iterator）
    - 中介者/调解者模式（Mediator）
    - 备忘录模式（Memento）
    - 观察者模式（Observer）又称发布-订阅（Publish/Subscribe）模式
    - 状态模式（State）
    - 策略模式（Strategy）
    - 访问者模式（Visitor）

也可以根据模式所处理的类或者对象

- 类：描述类之间的关系如何通过继承定义。类模式的关系在编译时建立。
- 对象：描述对象之间的关系，主要是利用组合定义。对象模式的关系在运行时简历，更加动态、更有弹性。

设计模式在应用中遵循六大原则：

1. 开闭原则（Open Close Principle）：说对扩展开放，对修改关闭
2. 里氏代换原则（Liskov Substitution Principle）：任何基类可以出现的地方，子类一定可以出现。
3. 依赖倒转原则（Dependence Inversion Principle）：针对接口编程，依赖于抽象而不依赖于具体。参考《Head First 设计模式（中文版）》工厂方法。
4. 接口隔离原则（Interface Segregation Principle）：使用多个隔离的接口，比使用单个接口要好
5. 迪米特法则（最少知道原则）（Demeter Principle）：一个实体应当尽量少的与其他实体之间发生相互作用，使得系统功能 模块相对独立。参考《Head First 设计模式（中文版）》外观模式。方法的调用范围尽可能小：
    - 该对象本身
    - 被当做方法的参数而传递进来的对象
    - 此方法锁创建或实例化的任何对象
    - 类的任何组件，类的一个属性（组件）是对象，可以调用这个对象的方法
    - 不要调用从另一个对象调用返回的对象的方法
![最少知道原则](https://note.youdao.com/yws/public/resource/fb63e88819e0de2bc8a59f7f002e0843/xmlnote/D2E6A6F7FE19461086D864D1F6A9B876/13843)
6. 合成复用原则（Composite Reuse Principle）：尽量使用合成/聚合的方式，而不是使用继承。也就是多用组合，少用继承。



# 参考

1. 《Head First 设计模式（中文版）》
2. [设计模式|菜鸟教程](https://www.runoob.com/design-pattern/design-pattern-intro.html)
3. 《大话设计模式》
4. 《深入浅出设计模式》