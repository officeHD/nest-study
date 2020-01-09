## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## 项目文档说明
本文档参照nest官方hello-world项目改编而来，用于个人研究nest

## 目录说明
src---项目核心内容开发文件夹

test---测试用例与配置文件

.gitignore---git要忽略的文件列表的配置文件(配置百度)，比如上传时忽略node_modules文件夹

.prettierrc---格式化工具prettier的配置文件(配置百度)，用于开发期间代码格式化操作的配置

nest-cli.json---nest脚手架配置文件(配置百度)

package.json---相信玩过webpack或者npm的人都知道这个文件作用了

tsconfig.build.json---打包的时候对ts的配置，不打包 node_modules文件夹、test文件夹、dist文件夹以及以.spec.ts结尾的文件

tsconfig.json---本项目中ts的配置文件

tslint.json---本项目中tslint(ts代码检查工具)配置文件
  配置字段选择：
    "quotemark": false, // 是否必须使用单引号
    "member-access": [false],// 设置成员对象的访问权限（public,private,protect)
    "ordered-imports": [false],
    "max-line-length": [true, 150], // 定义每行代码数
    "member-ordering": [false], // 设置修饰符顺序
    "interface-name": [false],// interface必须以I开头
    "arrow-parens": false,
    "object-literal-sort-keys": false,
    "no-empty-interface":true,// 不允许空接口
    "no-parameter-reassignment":true,// 不允许修改方法输入参数
    "prefer-for-of":true,// 如果for循环中没有使用索引，建议是使用for-of
    "await-promise":true,// 不允许没有Promise的情况下使用await
    "curly":true,// if/for/do/while强制使用大括号
    "forin":true,// 使用for in语句时，强制进行hasOwnProperty检查
    "no-arg":true,// 不允许使用arguments.callee
    "no-bitwise":true, // 不允许使用特殊运算符 &, &=, |, |=, ^, ^=, <<, <<=, >>, >>=, >>>, >>>=, ~
    "no-conditional-assignment":true,// do while/for/if/while 语句中将会对例如if(a=b)进行检查
    "no-console":true,// 不允许使用console对象
    "no-debugger":true,// 不允许使用debugger
    "no-duplicate-super":true,// 不允许super() 两次使用在构造函数中
    "no-empty":true,// 函数体不允许空
    "no-eval":true,// 不允许使用eval
    "no-for-in-array":true,// 不允许对Array使用for-in
    "no-invalid-template-strings":true,// 只允许在模板字符串中使用${
    "no-invalid-this":true,// 不允许在class之外使用this
    "no-null-keyword":true,// 不允许使用null,使用undefined代替null，指代空指针对象
    "no-sparse-arrays":true,// 不允许array中有空元素
    "no-string-throw":true,// 不允许throw一个字符串
    "no-switch-case-fall-through":true,// 不允许case段落中在没有使用breack的情况下，在新启一段case逻辑
    "no-unsafe-finally":true,// 不允许在finally语句中使用return/continue/break/throw
    "no-unused-expression":true,// 不允许使用未使用的表达式
    "no-use-before-declare":true,// 在使用前必须声明
    "no-var-keyword":true,// 不允许使用var
    "radix":true,// parseInt时，必须输入radix精度参数
    "restrict-plus-operands":true,// 不允许自动类型转换，如果已设置不允许使用关键字var该设置无效
    "triple-equals":true,// 必须使用恒等号，进行等于比较
    "use-isnan":true,// 只允许使用isNaN方法检查数字是否有效
    "indent":[true, "spaces", 4],// 每行开始以4个空格符开始
    "linebreak-style":[true,"CR/LF"],// 换行符格式 CR/LF可以通用使用在windows和osx
    "max-classes-per-file":[true,1],// 每个文件中可定义类的个数
    "max-file-line-count":[true,500],// 定义每个文件代码行数
    "no-default-export":true,// 禁止使用export default关键字
    "no-duplicate-imports":true,// 禁止在一个文件内，多次引用同一module
    "align":[true,"parameters","arguments","statements","members","elements"],// 定义对齐风格
    "class-name":true,// 类名以大驼峰格式命名
    "comment-format":[true, "check-space"],// 定义注释格式
    "encoding":true,// 定义编码格式默认utf-8
