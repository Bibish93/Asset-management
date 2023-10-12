const {verify} = require('jsonwebtoken')
const express = require('express')



const validationToken = (req, res, next) => {
    const accessToken = req.header("accessToken")

    if(!accessToken) return res.json({error: "user not logged in"})

    try {
        const validToken = verify(accessToken, "privateKey");

        if(validToken) {
            return next();


        }
    } catch (err) {

        return res.json({error: err})
    }
}

module.exports = {validationToken}