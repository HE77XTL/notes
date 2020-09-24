

安装之前请先查看node 版本，v10+
Bit 安装类似与git(其实使用也像)，主要有客户端和服务端安装以及代码上传。参考[官方教程](https://docs.bit.dev/docs/bit-server)  
    
### 客户端

全局安装bit-bin 即可
````
npm install bit-bin -g
````

### 服务端

默认已经服务端环境git node 都是可用的了

创建bit 账号

````
useradd bit

//重置密码 passed bit
````

安装

````
npm install bit-bin -g
````

选择bit 空间目录，官方默认是 /opt/; （建议选择挂载的大盘）
````
mkdir /opt/bit
mkdir /opt/bit/firt-test-scope  // firt-test-scope 根据实际项目命名
cd /opt/bit/firt-test-scope
bit init --bare
````
### 免密登录

与git 类似，也是添加远程仓库地址、提交、 拉取。为了避免每次都要输入账号密码（bit 账户的账号密码），需要配置远端linux 的免密登录。  
然后把所有客户端机器的 id_rsa.pub 公钥内容添加到远端 authorized_keys 内。  
需要注意的点：
在客户端配置 ssh header 即可，例如：

1、把专用密钥添加到 ssh-agent 的高速缓存中：

````
ssh-add ~/.ssh/id_dsa
````  

2、从ssh-agent中删除密钥：

````
ssh-add -d ~/.ssh/id_xxx.pub
````
3、查看ssh-agent中的密钥：

````
ssh-add -l
````

如果失败，查看 计算机管理/服务和应用程序/服务。OpenSSH Authentication Agent 需要启动

这个作者也不熟悉，具体遇到问题自行搜索，[参考资料](https://blog.csdn.net/boling_cavalry/article/details/86772345)

[ssh-add](https://blog.csdn.net/CityzenOldwang/article/details/77097661)






