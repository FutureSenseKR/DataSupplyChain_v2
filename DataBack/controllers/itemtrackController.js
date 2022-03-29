var express = require('express');
var router = express.Router();

const ITEMTRACT = require('../model/itemtrack')
const {record, readHash} = require('../tezos/app')

exports.add = async (req, res) =>{
    const {
        itemName,
        pub1,
        pub2,
        pub3
    } = req.body;

    try{
        const result = await ITEMTRACT.create({itemName:itemName, store1:{publicKey:pub1}, store2:{publicKey:pub2}, store3:{publicKey:pub3}})
        res.status(200).json(result)
    }catch(error){
        res.status(500).send(error)
        console.log(error)
    }
}

exports.read = async (req, res) =>{

    const name = req.params.name
    try{
        const result = await ITEMTRACT.findOne({itemName:name})
        res.status(200).json(result)
    }catch(error){
        res.stats(500).send(error)
        console.log(error)
    }
}

exports.tezos = async (req, res) => {
    const {
        key,
        value
    } = req.body;
    const response = await record(key, value)
    res.status(200).send(response)
}

exports.tezosRead = async (req, res) =>{
    const key = req.params.key;
    const response = await readHash(key)
    res.status(200).json(response)
}