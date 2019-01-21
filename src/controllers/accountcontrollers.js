//导出要使用的模块
const path = require('path')
//操作数据库
const MongoClient = require('mongodb').MongoClient;
//数字随机生成
var captchapng = require('captchapng');

// mongdb 连接url
const url = 'mongodb://localhost:27017';

exports.ResgirsetPages = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/register.html'))
}
//数据库的名字
const dbName = 'syc';

exports.regiester = (req, res) => {
    const reuselt = {
        status: 0,
        massage: '注册成功',
    }

    const {username} = req.body
    MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
        const db = client.db(dbName);
        //拿到要操作的数据集合 数据库里面的小库 真正存储的库
        const coll = db.collection('accontinfore')
        coll.findOne({username: username}, (err, repeat) => {
            if (repeat) {
                reuselt.status = 1
                reuselt.massage = "用户名重复"
                client.close();
                res.json(reuselt)
            }else{
                console.log('不存在')
                coll.insertOne(req.body, (err, repeat2) => {
                    if (!repeat2) {
                        reuselt.status = 2
                        reuselt.massage = "注册失败!"
                        }
                    client.close();
                    res.json(reuselt)
                })
            }
        })
    });
}

//登陆页面的操作

exports.loginpage = (req,res) =>{   
        res.sendFile(path.join(__dirname,'../public/html/login.html'))
}

exports.vcodepag = (req,res) =>{
    const vecode = parseInt(Math.random()*9000+1000)
    
    req.session.vecode  = vecode 
    var p = new captchapng(80,30,vecode); // width,height,numeric captcha
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

    var img = p.getBase64();
    var imgbase64 = Buffer.from(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
}

//处理登陆的逻辑页面

exports.login = (req,res)=>{
        const reuselt = {
            status : 0,
            massage : "登陆成功"
        }
        const {username,password,vecode} =req.body
        MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
        const db = client.db(dbName);
        //拿到要操作的数据集合 数据库里面的小库 真正存储的库
        const coll = db.collection('accontinfore')
        if( vecode != req.session.vecode  ) {
            reuselt.status = 1,
            reuselt.massage = "验证码错误请重新输入！"
            res.json(reuselt)
        
        }else{
            coll.find({username,password}, (err, select) => {
             
                if(!select){
                  reuselt.status = 2
                  reuselt.massage = "密码或账号错误！"

                }
                client.close();
                res.json(reuselt)
              
          })
        }
        
    });
}