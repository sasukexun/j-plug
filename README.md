# 目录
## stepBar:依赖于jquery

### 需要引入build 里面的同名JS文件，使用方法参考test里面的文件，css样式自定义

### 使用方法

#### 可使用的参数
        barBackground:进度条初始颜色
        titleColor:进度条标题初始颜色
        tipColor:进度条图标颜色
        tipStep:进度条走过的颜色
        title:可接受数组
        index:初始化进度步数

####  可使用的方法
      stepBar("next"):下一步
      stepBar("previous"):上一步
      stepBar(num):进入要第几步

## spillover:依赖于jquery的文本溢出插件

### 需要引入build 里面的同名JS文件，必须带上test同名文件里面的.slh:after 和对文本做line-height的设置

### 使用方法

#### 可使用的参数
     line:多行文本溢出的行数


