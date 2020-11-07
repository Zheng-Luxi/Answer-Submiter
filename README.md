## 在线答案提交系统
> #### 文件夹
>> ##### datas 用于存储网站信息
>> ##### fonts 用于存储网站字体
>> ##### node_modules 用于存储 node 包
>> ##### src 用于存储后端服务 js 文件
>> ##### static 用于存储前端浏览文件
>> ##### static/lib 用于存储前端浏览文件所需 css, js 文件
> #### 文件
>> ##### data/text.json 用于存储答案信息
>> ##### data/users.json 用于存储管理员账号
>> ##### fonts/Consolas.ttf Consolas字体文件
>> ##### fonts/幼圆.ttf 幼圆字体文件
>> ##### src/server.js 后端服务核心 js 文件
>> ##### src/router.get.js 向管理前端传输答案信息路由
>> ##### src/router.post.js 接受保存前端传输答案信息路由
>> ##### src/router.login.js 验证管理前端账号信息路由
>> ##### index.html 答题界面
>> ##### admin.html 管理界面
>> ##### README.md 介绍文件

## 使用流程
```flow
start=>start: 开始
end=>end: 结束

openNpm=>operation: 开启后端 Node.js 服务
openNgrok=>operation: 开启内网穿透 ngrok 服务
openAdmin=>operation: 打开前端管理界面
closeNpm=>operation: 关闭后端 Node.js 服务
closeNgrok=>operation: 关闭内网穿透 ngrok 服务
closeAdmin=>operation: 关闭前端管理页面

testError=>condition: 测试服务是否正常
checkProgram=>subroutine: 检查程序
inputText=>inputoutput: 输入答案
checkText=>operation: 核对答案

start->openNpm->openNgrok->openAdmin->testError
testError(yes)->inputText
testError(no)->checkProgram(bottom)->inputText
inputText->checkText->closeNpm->closeNgrok->closeAdmin->end
```