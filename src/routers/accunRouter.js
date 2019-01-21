//登陆处理
const express = require('express');
const path = require('path')
//设置静态资源目录

//创建路由对象
const accunRouter = express.Router()
//mvc
//创建 需要登陆的页面
const accunRoutere = require( path.join(__dirname,'../controllers/accountcontrollers.js'))
accunRouter.get('/register',accunRoutere.ResgirsetPages)
//注册页面 判断是否重复 或成功
accunRouter.post('/register',accunRoutere.regiester)
//处理登陆页面
accunRouter.get('/loginpage',accunRoutere.loginpage)
//处理登陆页面验证码的随机生成
accunRouter.get('/vcode',accunRoutere.vcodepag)
//处理登陆验证
accunRouter.post('/login',accunRoutere.login)
//导出路由对象
module.exports = accunRouter