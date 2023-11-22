const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, ()=>{
    console.log('Start Server : localhost:3002');
});

const key = {
    apiKey: 'EJ99XX1-G42M1C0-KN2YT3Q-HWWWAX1',  //원래는 DB에 저장 필요
    uuid: '74929ef4-8105-40b0-9d45-ed0e8f39c574'
};

app.get('/api/users/:apikey/:type', async (req,res)=>{
    let {
        apikey,
        type
    } = req.params;

    if(!uuidAPIKey.isAPIKey(apiKey) || !uuidAPIKey.check(apikey,key.uuid)){
        res.send('apikey is not valid');
    } else {

    if (type == 'seoul'){
        let data = [
            {name:"홍길동", city:"seoul"},
            {name:"김철수", city:"seoul"},
        ];
        res.send(data);
    }else if(type == 'jeju'){
        let data = [
            {name:"박지성", city:"jeju"},
            {name:"손흥민", city:"jeju"},
        ];        
    }else{
        res.send('Type is not correct.');
    }
}
});
