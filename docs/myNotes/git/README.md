#### 添加远测仓库
````
git remote add origin url

git push -u origin master
````

#### 添加远测仓库
````
git remote set-url origin url
````

#### 版本号
````
git symbolic-ref --short -q HEAD
````


### npm 常用命令
`````
npm config get registry  // 查看npm当前镜像源

npm config set registry https://registry.npm.taobao.org/  // 设置npm镜像源为淘宝镜像

yarn config get registry  // 查看yarn当前镜像源

yarn config set registry https://registry.npm.taobao.org/  // 设置yarn镜像源为淘宝镜像

`````


#### react 中实现类似vue 的 keep alive 的功能 ，思路备注

网上的库 实现思路有 Portals 将需要keep alive 的组件切换挂载节点  

缓存数据（根据具体需求场景做定制处理更好）UI=f(data); 更彻底的使用redux

（如果技术栈可以选择还是vue，我用框架不就是想省事嘛）

#### idea 启动 失败， 提示 tomcat 的 1099 端口占用   

实际查看并没有。原因为，Hyper-V 的保留端口将其占用，解决方法：  

首先确定问题，管理员模式执行 cmd 命令，查看系统保留的端口范围：
```
netsh interface ipv4 show excludedportrange protocol=tcp

```

暂时停止 Hyper-V 服务，管理员模式执行 CMD 命令：  
```
dism.exe /Online /Disable-Feature:Microsoft-Hyper-V
```

把所需端口移出排除端口之列，比如解除 1099 端口的保留状态，让他可以为 tomcat 等程序使用，管理员模式执行 CMD 命令：
```
netsh int ipv4 delete excludedportrange protocol=tcp startport=1099 numberofports=1
```

重新启用 Hyper-V 服务，管理员模式执行 CMD 命令：
`````
dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All

`````


netsh int ipv4 delete excludedportrange protocol=tcp startport=3000 numberofports=1

netsh int ipv4 add excludedportrange protocol=tcp startport=3000 numberofports=1

查看端口占用
````
netstat -ano
````






