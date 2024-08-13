use riya
db.items.insertOne({name:"shre",price:100,rate:4.5})
db.items.find({rate:{$gte:4.8},price:{$gt:4000}})
db.items.find({$or:[{rate:{$gte:4.8}},{price:{$gt:4000}}]})
db.items.find({rate:{$gte:4.8}},{rate:1})