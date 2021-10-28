# 基本配置

### 更换源

参考：https://mirrors.tuna.tsinghua.edu.cn/help/raspbian/

修改以下文件：

/etc/apt/sources.list
```
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main non-free contrib
```  


/etc/apt/sources.list.d/raspi.list
```
deb http://mirrors.tuna.tsinghua.edu.cn/raspberrypi/ buster main ui
```

### 输入法
google 中文输入法教程比较多， 基本可行   

安装谷歌拼音， 安装后重启
```
apt install -y fcitx-googlepinyin
```

通常来说配置了国内的源基本都能安装成功，在 Preference -> Fcitx configuration 可以对已有的输入法进行管理

### ssh 远程连接

Preference -> Raspberry Pi configuration -> SSH 选择Enable 便可 

