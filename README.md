# numberpicker 数字选择器

---


## 何时使用

当需要获取标准数值时。

## API

属性如下

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| min     | 最小值   | Number | -Infinity        |
| max     | 最大值       | Number      | Infinity           |
| value     | 当前值       | Number      |            |
| step     | 每次改变步数       | Number      |      1      |
| defaultValue     | 初始值       | Number      |            |
| disabled     | 禁用       | Boolean      |      false      |
| readOnly     | 不可手动输入，仅可通过加减按钮增减数值  | Boolean      |      false      |
| autoFocus     | 自动获得焦点       | Boolean      |      false      |
| onChange     | 变化回调       | Function      |      `function() {}`      |
| onAdd     | 增加数值回调       | Function      |       `function() {}`     |
| onReduce     | 减少数值回调       | Function      |     `function() {}`       |
| onBlur     | 失去焦点回调       | Function      |            |
| onFocus     | 获得焦点回调       | Function      |      `function() {}`      |
| setValue     | 设置输入框内的数值       | Function      |   `function() {}`         |
| getValue     | 获得当前输入框内的数值       | Function      |  `function() {}`          |

