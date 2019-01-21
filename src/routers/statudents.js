//列表的路由模块
const express = require('express');

const path = require('path')

//创建路由
const statudents = express.Router()

const statudent = require(path.join(__dirname,'../controllers/statuslist.js'))


statudents.get('/statudentslist',statudent.students)




module.exports = statudents