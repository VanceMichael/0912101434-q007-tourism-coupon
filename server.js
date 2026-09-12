const express=require('express'); const app=express(); app.use(express.json()); app.get('/health',(_q,r)=>r.json({status:'ok'})); app.listen(8080,()=>console.log('coupon gateway on 8080'));
