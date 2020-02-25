# 听云集成文档

## 1.安装听云模块
`npm install react-native-tingyunapp --save`
## 2.添加依赖
在项目 android 目录下的 build.gradle 文件中添加以下内容。
```
buildscript {
	ext.tingyun_sdk_version = '2.13.7.2'//听云SDK版本
	ext.tingyun_ndk_version = '1.2.1'//听云NDK版本
    repositories {
        maven { url "http://nexus2.tingyun.com/nexus/content/repositories/snapshots/" }
    }
    dependencies {
		classpath "com.networkbench:tingyun-ea-agent-android-gradle-plugin:2.13.7.2"    }
}
allprojects {
    repositories {
        maven { url "http://nexus2.tingyun.com/nexus/content/repositories/snapshots/" }
    }
}
```
在 app 目录下的 build.gradle 文件中添加以下内容。
```
apply plugin:'newlens'

dependencies {
      compile "com.networkbench.newlens.agent.android:nbs.newlens.nativecrash:1.2.1"
compile project(':react-native-tingyunapp')
}
```
## 3.配置权限
在AndroidMainfest.xml文件中增加以下的权限
```
<!--必要权限，用以与服务端交互-->
<uses-permission android:name="android.permission.INTERNET"/>
<!--必要权限，用以获取当前设备的网络状态和WiFi状态，如：2G、3G、4G、WiFi，建议添加-->
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<!--非必要权限，用以获取 targentVersion 29 及以上 Android 10 设备的网络状态-->
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<!--非必要权限，用以使用「可视化操作命名功能」-->
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
<uses-permission android:name="android.permission.SYSTEM_OVERLAY_WINDOW"/>
<!--非必要权限，用以获取当前移动网络连接的基站信息-->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
```
## 4.初始化听云
参考[MainApplication.java](https://github.com/lens-mobile/tingyunDemo4RN/blob/master/android/app/src/main/java/com/tingyundemorn/MainApplication.java)
## 5.调用接口
参考[App.js](https://github.com/lens-mobile/tingyunDemo4RN/blob/master/App.js)
