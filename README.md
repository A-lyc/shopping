# draw lottery
一个横向竖向滚动抽奖，用到import TweenMax from 'gsap'，TweenMax的插件
网址：https://www.tweenmax.com.cn/api/tweenmax/TweenMax()
```js
<draw-lottery/>
```
## props
| 描述 | 名称 | 类型 | 默认值 | 例子 |  
| :-----| :-----| :---- |  :----| :----|
| 动画持续时间 | animationTime | Number | 10 | 10 |
|列表数据 - 至少传输五个 | drawData | Array | [] | [{src:'',name:''}] |
|中将的位置，多少px，按照宽度或者高度来的| winPrizeIndex | String | -2200 | -2000 |
| 中奖的前面留几个 | winIndex | Number | 0 | 5（是第五个） |
| 横向还是竖向滚动 Y:true X:false | drawXY | Boolean | true | Y:true X:false |
| 模型数据 | resData | Object | {WH:{ width:'110',height:"110",overflow:"hidden",},IdBox:[''],classBox:['',''],classImg:[''],Flex:['']} | WH:定义宽高必填，其他样式随便，定义在style内的样式，IdBox：最外层div添加类，可以添加背景，classBox:每一个滚动的小item添加类，classImg：内部图片添加类，Flex：套在滚动的外框添加类，这个控制横竖想滚动，|
| 中奖的数据 | drawDataSuccess | Object | {src:'',name:''} | {src:'',name:''} |
| 动画操作 初始化设置，没有开始动画 | TweenMaxInit | Object | {ease: "Expo.easeOut", //动画属性} | ease: "Expo.easeOut", //动画属性 |
| 开始动画 | getStart | Function | | |
| 进行中 | getUpdate | Function | | |
| 已结束 | getComplete | Function | | |
| 结束立即开始的时候 | getRepeat | Function | | |
