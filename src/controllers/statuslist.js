//导出要使用的模块
const path = require('path')
//操作数据库
const MongoClient = require('mongodb').MongoClient;

exports.students = (req,res) =>{
        res.send('学生列表页面')
}