//登陆处理

const express = require('express');
const path = require('path')
//设置静态资源目录



//创建路由对象
const accunRouter = express.Router()
//mvc
//创建 需要登陆的页面
const accunRoutere = require( path.join(__dirname,'../controllers/accountcontrollers.js'))
accunRouter.get('/reister',accunRoutere.ResgirsetPages)

accunRouter.post('/register',accunRoutere.regiester)
//导出路由对象
module.exports = accunRouter