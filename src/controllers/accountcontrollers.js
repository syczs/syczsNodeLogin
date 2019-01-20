//导出要使用的模块
const path = require('path')
const mongdb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
//连接url
const url = 'mongodb://localhost:27017';

exports.ResgirsetPages= (req,res)=>{
   res.sendFile(path.join(__dirname,'../public/html/regiester.html'))
}
//数据库的名字
const dbName = 'heimafood';

exports.regiester = (req,res)=>{
    const reuselt = {
        status:0,
        massage:'注册成功',
    }

    const {username} = req.body
    MongoClient.connect(url, { useNewUrlParser: true },(err, client)=> {

   
        const db = client.db(dbName);
        //拿到要操作的数据集合 数据库里面的小库 真正存储的库
        const coll = db.collection('food')
    
    
          coll.insertOne({ username:username },(err, result) => {console.log(result2);})  
    
        client.close();
      });
    res.json(reuselt)
}