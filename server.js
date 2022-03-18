import express from 'express';
// const express = require('express');
import cors from 'cors';

const app = express();


app.use(cors());
app.use(express.json());
app.get('/input',(req,res) => {
	res.json({
		name:'Lawra',
		message:'Khanki'
	})
})

app.post('/send',(req,res) => {
    const data = req.body.name;
    console.log(data);
    const num = data;
    console.log(num);
    if(num >= 1 && num <= 100)
    	{res.json({
    		message:`You choose correct number. Your number is  ${num} Hurrah :)`,
    		number:num
    	})}
   else{
   	  res.json({
    		message:`We need number between 1 - 100 but your number is ${num} sorry :(`,
    		number:num
    	})
   }
})


app.listen(9000,() => {console.log('server is working')})



