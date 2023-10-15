// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";
// import crypto from "crypto";
// import request from "request";
// import dotenv from "dotenv";

// Instead of this in your code
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import crypto from "crypto";
import request from "request";
import dotenv from "dotenv";

// Use require like this
// const express = require("express");
// const fetch = require("node-fetch");
// const cors = require("cors");
// const crypto = require("crypto");
// const request = require("request");
// const dotenv = require("dotenv");

dotenv.config();

let changelly_float_price=0,changelly=0,exolix=0,changehero=0,godex=0,simpleswap=0,changenow=0,stealthio=0,letsexchange=0,exolix_fixed=0,simpleswap_fixed=0;
let changelly_fixed_price=0,changelly_fixed=0,stealthio_fixed=0,changehero_fixed=0,letsexchange_fixed=0,changenow_fixed=0;
let changelly_fixed_rateId=0, changenow_fixed_rateId=0, stealthio_fixed_rate_id=0,exolix_fixed_rateId=0,simpleswap_fixed_rateId=0,changehero_fixed_rateId=0,letsexchange_fixed_rateId=0;

const PORT = process.env.PORT || 5002;
const privateKeyString = "308204be020100300d06092a864886f70d0101010500048204a8308204a40201000282010100b6f7638ac5b811561dc071820c7c764da95ddfb63dafb1f9b96f4d1577ae63f6c7010dd041b5bc314002f0a8536ea29c619de7487b3a98944607674b3905274c40f1f36cb58e9925c2c90846f40cf3f7d10983e01ab0354ded5de57bcac6dc31b47b0bac5f79c7e7947db9bc4a7e18e46a94f291c8055576e00825510731d5b89c5936c8d48106ff837fca0881b721f7c09a272bc316c74c8e56e0dfa69b0cdf3153b671a732506b043363443ff0677f615be06f4519ee07a130d5936e71c87761838296e667122ead027d72431ba8e0b75afe6249c5e4cf1152309e9eb392a8d4d02a6b84443801745731db6b548b7a392d4783c4e168a3a9f0235c84ebf7b902030100010282010029ecabf17b76befa359d08255d89136e9e35757283d603790e65938b2cbe58078ef80ddb3f834e1916ead58c2c79f866cef368b0b213ee2c639384b6b6dd18711f9c9143c2a2673340dbe1baa867636bd089569f7e5e0c08cc302cca5ddf8d4b1268f376cef5cfb99fcbe34862e55bfcd2f34855e1385fa9fa91c3433adbcf75b7821d6299f198edc7472da9fd401ab3f29887ca8e1105389351691ef2925a14b7a960c85d887f233feac28c5248cf8c20360bdcf86423fd0f18a9c7678ff3fac8b155f1a4d4e356260f336a8a94449a8a7fad36314f8005c23fd196a8f9d2aa57bf0bed3ae93ac4b095a2abc311eee8e6f44fefb6def929ca7e371af2685b1502818100e45e992dab2a73ca02855ee71ab2c8b6cbe5c356892ca2f6fba6e642fb7e75221b8f48574ea7419e33850e1938d6fbd16306a4e32d75b4f7d109523751694cd620214a0073a682c1ce9ed005c4d4fef212ac8f7b351c4772b32461e9555b22f7e1e67398d6666b7c34dff08426c8d144470ae60509cae038d558ce8a5236be9702818100cd1a7efa1353a0c5b42c0fb3e4477fba8cac7076aac21c1fd4a07558c629253f592304ab611a72daf24c562c27dcaf0d46751366840274438886b0ca3309008d73b4953d887a7e27dab38086864eff3071bd7daf5812b058de591c484f6c51d249561b5453b6529dc5e54a9ffaa6982726abaa3c51508701a31a43055932162f02818100b521e72316e9440fcd3215d4fe13222a02cd89c300685c15c4025c0e72c59988650d9f964837574f7093af5c07fe549b7e8ccd89b70bee6ec4e93cc1cd9bd4aaddaf29aff40af5195d960f6f13f0d10a160fb27a49e4d532bfae32ceccb9cda18916ad47637eb6f03c4c06cbfaab3b788954b69ef66668b40b5c35edf6499f9f02818100a82ca69b14c7c896f372017a269efdbb8fe740dbfc8de713ae7bd75c703782a41bc99be58e5c6a7ade9bfb387f82f34236587f0cdb074c1fa7cd911e6a9462109a24230eee5e4a1d11b58798467e75be5a34dedeac9fbe5b500dcf23f783c0df6564a64a11cdf8960793480a3f32e4a58d8ecaaa649e5be4dac108dd54d2bddf02818069e9b896d061a7449202370c9fe028c5a4a83890510861184c7d712e4749ff8d8185d0702d7894d2609b50cfd7d3fab44f84be6d2935904f136018123979e6cca03648d855cf53b658aead3144bd4debc48fb395fae656743851da0bd25c1a016284a0343149529f6aa5deeee5ea57f923064ecba9dfa093aaded8803070f32d";

const host = "127.0.0.1";


const app = express();

app.use(express.json());
app.use(cors());

let data;
let url="https://api.changenow.io/v1/currencies?active=true";
let options={
  method:"GET",
  headers:{
    "Content-Type":"application/json"
  }
}

const callApi=async()=>{
  const response=await fetch(url,options);
  data=await response.json()
}

callApi();

//**************************************** Multiple api fetch data ************************* */

app.post("/multiplefetch", async (req, res) => {

  changelly_float_price=0
  changelly=0
  exolix=0 
  changehero=0
  godex=0 
  simpleswap=0 
  changenow=0 
  stealthio=0 
  letsexchange=0 
  exolix_fixed=0 
  simpleswap_fixed=0;
  changelly_fixed_price=0 
  changelly_fixed=0 
  stealthio_fixed=0 
  changehero_fixed=0
  letsexchange_fixed=0
  changelly_fixed_rateId=0 
  changenow_fixed_rateId=0 
  stealthio_fixed_rate_id=0 
  exolix_fixed_rateId=0 
  simpleswap_fixed_rateId=0 
  changehero_fixed_rateId=0 
  letsexchange_fixed_rateId=0;

  const timeout=1000;
  const responseCall=6000;

  const { sell, get, amount } = req.body

  console.log(req.body)

  const privateKey = crypto.createPrivateKey({
    key: privateKeyString,
    format: "der",
    type: "pkcs8",
    encoding: "hex",
  });

  const publicKey = crypto.createPublicKey(privateKey).export({
    type: "pkcs1",
    format: "der",
  });


  //**************************Changelly float price ********************/
  const message1 = {
    jsonrpc: "2.0",
    id: "test",
    method: "getExchangeAmount",
    params: {
      from: sell,
      to: get,
      amountFrom: amount,
    },
  };

  const signature1 = crypto.sign(
    "sha256",
    Buffer.from(JSON.stringify(message1)),
    {
      key: privateKey,
      type: "pkcs8",
      format: "der",
    }
  );

  const param1 = {
    method: "POST",
    url: "https://api.changelly.com/v2",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": crypto
        .createHash("sha256")
        .update(publicKey)
        .digest("base64"),
      "X-Api-Signature": signature1.toString("base64"),
    },
    body: JSON.stringify(message1),
  };

  //***************************Changelly fixed price******************* */

  const message2 = {

    jsonrpc: "2.0",
    id: "test",
    method: "getFixRateForAmount",
    params: [
      {
        from: sell,
        to: get,
        amountFrom: amount
      }
    ]

  }

  const signature2 = crypto.sign(
    "sha256",
    Buffer.from(JSON.stringify(message2)),
    {
      key: privateKey,
      type: "pkcs8",
      format: "der",
    }
  );

  const param9 = {
    method: "POST",
    url: "https://api.changelly.com/v2",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": crypto
        .createHash("sha256")
        .update(publicKey)
        .digest("base64"),
      "X-Api-Signature": signature2.toString("base64"),
    },
    body: JSON.stringify(message2),
  };


  const param3 = {
    jsonrpc: "2.0",
    method: "getExchangeAmount",
    params: {
      from: sell,
      to: get,
      amount: amount,
    },
  };

  const param4 = {
    from: sell.toUpperCase(),
    to: get.toUpperCase(),
    amount: amount,
  };

  const param5 = {
    jsonrpc: "2.0",
    method: "getFixRate",
    params: {
      from: sell,
      to: get,
      amount: amount,
    },
  };


  const param8 = {
    from: sell,
    to: get,
    amount: amount,
    float: true
  };

  const param10 = {
    from: sell,
    to: get,
    amount: amount,
    float: false
  };


  if (amount == "0" || amount == "0." || amount == "") {
    res.json({ hightprice: "0" })
  } else {
    try {

      var response1,response2,response3,response4,response5,response6,response7,response8,response9,response10,response11,response12,response13,response14,response15;

      setTimeout(async()=>{

        // Changelly
      let result1 = changelly_float_price;
       changelly = typeof result1 === 'undefined'? 0: parseFloat(result1)
       changelly_fixed =  parseFloat(changelly_fixed_price)

       changelly = typeof changelly === 'number' && !isNaN(changelly)?changelly.toFixed(5):0;
       changelly_fixed = typeof changelly_fixed === 'number' && !isNaN(changelly_fixed)?changelly_fixed.toFixed(5):0;

      // Exolix
      try { 
        if(response2.ok){

            var result2 = await response2.json();
            exolix = typeof result2.toAmount === 'undefined'? 0: parseFloat(result2.toAmount)
            exolix = typeof exolix === 'number' && !isNaN(exolix)?exolix.toFixed(5):0;
         
        }else{
          exolix=0
        }
      }catch (error) {
          exolix=0
          console.log(error)
        }

      // Changehero
      try {
      if(response3.ok){
          var result3 = await response3.json();
           changehero = typeof result3.result === 'undefined'? 0: parseFloat(result3.result)
           changehero = typeof changehero === 'number' && !isNaN(changehero)?changehero.toFixed(5):0;

      }else{
        changehero=0
      }        
    } catch (error) {
        changehero=0
      }


      // Godex
      try {
      if(response4.ok!="undefined"){
          var result4 = await response4.json();
          godex = typeof result4.amount === 'undefined'? 0: parseFloat(result4.amount)
          godex = typeof godex === 'number' && !isNaN(godex)?godex.toFixed(5):0;
      }else{
        godex=0
      }
    } catch (error) {
      godex=0
    }

      // Simpleswap
      try {
      if(response5.ok){
          var result5 = await response5.json();
          simpleswap = typeof result5 === 'undefined'? 0: parseFloat(result5)
          simpleswap = typeof simpleswap === 'number' && !isNaN(simpleswap)?simpleswap.toFixed(5):0;

      }else{
        simpleswap = 0
      }
    } catch (error) {
      simpleswap = 0
    }


      // Changenow
      try {
      if(response6.ok){
          var result6 = await response6.json();
          changenow = typeof result6.estimatedAmount === 'undefined'? 0: parseFloat(result6.estimatedAmount)
          changenow = typeof changenow === 'number' && !isNaN(changenow)?changenow.toFixed(5):0;
      }else{
        changenow=0
      }        
    } catch (error) {
        changenow=0
      }


      // StealthEX
      try {
      if(response7.ok!="undefined"){
          var result7 = await response7.json();
           stealthio = typeof result7.estimated_amount === 'undefined'? 0: parseFloat(result7.estimated_amount)
           stealthio = typeof stealthio === 'number' && !isNaN(stealthio)?stealthio.toFixed(5):0;
      }else{
        stealthio=0
      }
    } catch (error) {
      stealthio=0
    }


      // Letsexchange
      try {
      if(response8.ok){
          var result8 = await response8.json();
           letsexchange = typeof result8 === 'undefined'? 0: parseFloat(result8.amount);
           letsexchange = typeof  letsexchange=== 'number' && !isNaN(letsexchange)?letsexchange.toFixed(5):0;
      }else{
        letsexchange=0
      }        } catch (error) {
        letsexchange=0
    }

      // Changenow fixed
      try {
      if(response10.ok){
          var result10 = await response10.json();
          changenow_fixed = typeof result10.estimatedAmount === 'undefined'? 0: parseFloat(result10.estimatedAmount);
          changenow_fixed = typeof changenow_fixed === 'number' && !isNaN(changenow_fixed)?changenow_fixed.toFixed(5):0;
          changenow_fixed_rateId=result10.rateId
      }else{
        changenow=0
        changenow_fixed_rateId=0
      }        } catch (error) {
        changenow=0
      }

      //Stealth EX Fixed
      try {
      if(response11.ok){
          var result11 = await response11.json();
          stealthio_fixed = typeof result11.estimated_amount === 'undefined'? 0: parseFloat(result11.estimated_amount)
          stealthio_fixed = typeof stealthio_fixed === 'number' && !isNaN(stealthio_fixed)?stealthio_fixed.toFixed(5):0;
          stealthio_fixed_rate_id= result11.rate_id;
      }else{
        stealthio_fixed=0
        stealthio_fixed_rate_id=0
      }        } catch (error) {
        stealthio_fixed=0
        stealthio_fixed_rate_id=0
      }


      // Exolix Fixed
      try {
      if(response12.ok){
          var result12 = await response12.json();
           exolix_fixed = typeof result12.toAmount === 'undefined'? 0: parseFloat(result12.toAmount)
           exolix_fixed = typeof exolix_fixed === 'number' && !isNaN(exolix_fixed)?exolix_fixed.toFixed(5):0;
      }else{
        exolix=0
      }        } catch (error) {
        exolix=0
      }


      // Simpleswap Fixed
      try {
      if(response13.ok){
          var result13 = await response13.json();
          simpleswap_fixed = typeof result13 === 'undefined'? 0: parseFloat(result13);
          simpleswap_fixed = typeof simpleswap_fixed === 'number' && !isNaN(simpleswap_fixed)?simpleswap_fixed.toFixed(5):0;
      }else{
        simpleswap=0
      }        } catch (error) {
        simpleswap=0
      }

      // Changehero Fixed
      try {
      if(response14.ok){
          var result14 = await response14.json();
          changehero_fixed = parseFloat(result14.result !== undefined && result14.result.length > 0?result14.result[0].result:0)*parseFloat(amount);
          changehero_fixed = typeof changehero_fixed === 'number' && !isNaN(changehero_fixed)?changehero_fixed.toFixed(5):0;
          changehero_fixed_rateId=result14.result[0].id
        }else{
        changehero=0
        changehero_fixed_rateId=0
      }        } catch (error) {
        changehero=0
        changehero_fixed_rateId=0
      }


      // Letsexchange Fixed
      try {
      if(response15.ok!="undefined"){
          var result15 = await response15.json();
          letsexchange_fixed = typeof result15 === 'undefined'? 0: parseFloat(result15.amount)
          letsexchange_fixed = typeof letsexchange_fixed === 'number' && !isNaN(letsexchange_fixed)?letsexchange_fixed.toFixed(5):0;
          letsexchange_fixed_rateId=result15.rate_id;
        }else{
        letsexchange_fixed=0
      }        } catch (error) {
        letsexchange_fixed=0
      }


      //.........Creating arry of objects and finding heighest value...........//

      let arr = [
        { name: "changenow", value: parseFloat(changenow) },
        { name: "exolix", value: parseFloat(exolix) },
        { name: "godex", value: parseFloat(godex) },
        { name: "changehero", value: parseFloat(changehero) },
        { name: "changelly", value: parseFloat(changelly) },
        { name: "simpleswap", value: parseFloat(simpleswap) },
        { name: "stealthio", value: parseFloat(stealthio) },
        { name: "letsexchange", value: parseFloat(letsexchange) },
        { name: "changelly_fixed", value: parseFloat(changelly_fixed), rateId: changelly_fixed_rateId},
        { name: "changenow_fixed", value: parseFloat(changenow_fixed), rateId: changenow_fixed_rateId},
        { name: "stealthio_fixed", value: parseFloat(stealthio_fixed), rateId: stealthio_fixed_rate_id },
        { name: "exolix_fixed", value: parseFloat(exolix_fixed) },
        { name: "simpleswap_fixed", value: parseFloat(simpleswap_fixed)},
        { name: "changehero_fixed", value: parseFloat(changehero_fixed), rateId: changehero_fixed_rateId },
        { name: "letsexchange_fixed", value: parseFloat(letsexchange_fixed), rateId: letsexchange_fixed_rateId},
      ];

      function sortArrayDescending(arr, key) { 
        arr.sort(function (a, b) {
          return b[key] - a[key];
        });
        return arr;
      }

      const sortedArr = sortArrayDescending(arr, "value");

      console.log("Highest value " + sortedArr[0].value + sortedArr[0].name);

      const responseObj={
        hightprice: sortedArr[0].value,
        pricearray: sortedArr,
        changelly: changelly,
        exolix: exolix,
        changehero: changehero,
        godex: godex,
        simpleswap: simpleswap,
        changenow: changenow,
        stealthio: stealthio,
        letsexchange: letsexchange,
        changelly_fixed: changelly_fixed,
        changenow_fixed: changenow_fixed,
        stealthio_fixed: stealthio_fixed,
        exolix_fixed: exolix_fixed,
        simpleswap_fixed: simpleswap_fixed, 
        changehero_fixed: changehero_fixed,
        letsexchange_fixed: letsexchange_fixed,
      }

      res.json(responseObj)

      // console.log(response1?"changelly":"error")
      // console.log(response2?"exolix":"error")
      // console.log(response3?"changehero":"error")
      // console.log(response4?"godex":"error")
      // console.log(response5?"simpleswap":"error")
      // console.log(response6?"chnagenow":"error")
      // console.log(response7?"stealthex":"error")
      // console.log(response8?"changelly":"error")
      // console.log(response9?"changelly":"error")
      // console.log(response10?"changelly":"error")
      // console.log(response11?"changelly":"error")
      // console.log(response12?"changelly":"error")
      // console.log(response13?"changelly":"error")
      // console.log(response14?"changelly":"error")
      // console.log(response15?"changelly":"error")

      //  console.log(changelly)
      //  console.log(exolix)
      //  console.log(changehero)
      //  console.log(godex)
      //  console.log(simpleswap)
      //  console.log(changenow)
      //  console.log(letsexchange)
      //  console.log(changelly_fixed)
      //  console.log(changenow_fixed)
      //  console.log(stealthio_fixed)
      //  console.log(exolix_fixed)
      //  console.log(simpleswap_fixed)
      //  console.log(changehero_fixed)
      //  console.log(letsexchange_fixed)
      },responseCall)

      //.......................................................Api 1 Call (Changelly)
      setTimeout(()=>{

        request(param1, async function (error, response) {
          try {
            const data = await JSON.parse(response.body);
            changelly_float_price = data.result[0].amountTo;
          } catch (error) {
            changelly_float_price = 0;
          }

        })         
      },timeout)

      //.......................................................Api 2 Call (Exolix)
      setTimeout(async()=>{
        response2=await fetch(
          `https://exolix.com/api/v2/rate?coinFrom=${sell}&coinTo=${get}&amount=${amount}&rateType=float`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      },timeout)

      //.......................................................Api 3 Call (Change Hero)
      setTimeout(async()=>{
        response3=await fetch(`https://api.changehero.io/v2/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": "46799cd819854116907d2a6f54926157",
          },
          body: JSON.stringify(param3),
        })
      },timeout)

      

      //.......................................................Api 4 Call (Godex)
      setTimeout(async()=>{
        response4=await fetch(`https://api.godex.io/api/v1/info`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(param4),
        })
      },timeout)

      //.......................................................Api 5 Call (Simpleswap)
      setTimeout(async()=>{
        response5=await fetch(`http://api.simpleswap.io/get_estimated?api_key=ae57f22d-7a23-4dbe-9881-624b2e147759&fixed=false&currency_from=${sell}&currency_to=${get}&amount=${amount}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
      },timeout)

      //...................................................... Api 6 Call (Changenow)
      setTimeout(async()=>{
        response6=await fetch(
          `https://api.changenow.io/v1/exchange-amount/${amount}/${sell}_${get}/?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      },timeout)

      //.......................................................Api 7 Call (StealthEX)
      setTimeout(async()=>{
        response7=await fetch(`https://api.stealthex.io/api/v2/estimate/${sell}/${get}?amount=${amount}&api_key=6cbd846e-a085-4505-afeb-8fca0d650c58&fixed=false`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
      },timeout)

      //.......................................................Api 8 Call (Letsexchange)
      setTimeout(async()=>{
        response8=await fetch(`https://api.letsexchange.io/api/v1/info`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImRhdGEiOnsiaWQiOjkwLCJoYXNoIjoiZXlKcGRpSTZJa2wzYmxFNE1VeHVOMU5DU25aamFEbExWVE5rYW1jOVBTSXNJblpoYkhWbElqb2lUV1ZhWWs5dGNXY3dWSEZMYm1wWGRuVjJjMXBzV0RaU1ZpdFphamxJYWtrM1EzQkhTRlpsVFdGS1JXZHVXV1pxUTJRNU9WUXlaSHBEVDJWd2NVeEdRVTFOYjBVelJIaEdSRzlwWjBsaEt6UjJWR0UxVjI1TmQweEROamRCUmxCWFdISTJRMGRpUm1Kb1ltTTlJaXdpYldGaklqb2labU0xTnpNMU0yRXlaRFJqWmpSalpXWTFZV1ZqWVRkalptSTBZall4WmpVNFpqZGtNak0wTXpVNU1XRmtaRGRrWm1Sak5HWXhaamt6TldFM01tVXlOaUo5In0sImlzcyI6Imh0dHBzOlwvXC9sZXRzLW5naW54LXN2Y1wvYXBpXC92MVwvYXBpLWtleSIsImlhdCI6MTY2ODUxNjUzNywiZXhwIjoxOTg5OTI0NTM3LCJuYmYiOjE2Njg1MTY1MzcsImp0aSI6IkRCelpBVjdBRDhMMzZTZ1IifQ.tP5L6xDINQSmWVJsmin2vrjrYFopk-cDNWGkBOlKARg"
          },
          body: JSON.stringify(param8),
        })
      },timeout)

      //.......................................................Api 9 Call (Changelly Fixed Price)
      setTimeout(async()=>{

        response9=request(param9, async function (error, response) {
          try {
            const data = await JSON.parse(response.body);
            changelly_fixed_price = data.result[0].amountTo;
            changelly_fixed_rateId= data.result[0].id;
          } catch (error) {
              changelly_fixed_price = 0;
              changelly_fixed_rateId= 0;
            }
        })          
      
      },timeout)

      //.......................................................Api 10 Call (Changenow Fixed Price)
      setTimeout(async()=>{
        response10=await fetch(
          `https://api.changenow.io/v1/exchange-amount/fixed-rate/${amount}/${sell}_${get}?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c&useRateId=true`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json", 
            },
          }
        )
      },timeout)

      //.......................................................Api 11 Call (StealthEX Fixed Price)
      setTimeout(async()=>{
        response11=await fetch(`https://api.stealthex.io/api/v2/estimate/${sell}/${get}?amount=${amount}&api_key=6cbd846e-a085-4505-afeb-8fca0d650c58&fixed=true`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
      },timeout)

      //.......................................................Api 12 Call (Exolix Fixed)
      setTimeout(async()=>{
        console.log(sell,get,amount)
        response12=await fetch(
          `https://exolix.com/api/v2/rate?coinFrom=${sell}&coinTo=${get}&amount=${amount}&rateType=fixed`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      },timeout)

      //.......................................................Api 13 Call (Simpleswap Fixed)
      setTimeout(async()=>{
        response13=await fetch(`http://api.simpleswap.io/get_estimated?api_key=ae57f22d-7a23-4dbe-9881-624b2e147759&fixed=true&currency_from=${sell}&currency_to=${get}&amount=${amount}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
      },timeout)

      //.......................................................Api 14 Call (Change Hero Fixed)
      setTimeout(async()=>{
        response14=await fetch(`https://api.changehero.io/v2/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": "46799cd819854116907d2a6f54926157",
          },
          body: JSON.stringify(param5),
        })
      },timeout)

      //.......................................................Api 15 Call (Letsexchange Fixed)
      setTimeout(async()=>{
        response15=await fetch(`https://api.letsexchange.io/api/v1/info`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImRhdGEiOnsiaWQiOjkwLCJoYXNoIjoiZXlKcGRpSTZJa2wzYmxFNE1VeHVOMU5DU25aamFEbExWVE5rYW1jOVBTSXNJblpoYkhWbElqb2lUV1ZhWWs5dGNXY3dWSEZMYm1wWGRuVjJjMXBzV0RaU1ZpdFphamxJYWtrM1EzQkhTRlpsVFdGS1JXZHVXV1pxUTJRNU9WUXlaSHBEVDJWd2NVeEdRVTFOYjBVelJIaEdSRzlwWjBsaEt6UjJWR0UxVjI1TmQweEROamRCUmxCWFdISTJRMGRpUm1Kb1ltTTlJaXdpYldGaklqb2labU0xTnpNMU0yRXlaRFJqWmpSalpXWTFZV1ZqWVRkalptSTBZall4WmpVNFpqZGtNak0wTXpVNU1XRmtaRGRrWm1Sak5HWXhaamt6TldFM01tVXlOaUo5In0sImlzcyI6Imh0dHBzOlwvXC9sZXRzLW5naW54LXN2Y1wvYXBpXC92MVwvYXBpLWtleSIsImlhdCI6MTY2ODUxNjUzNywiZXhwIjoxOTg5OTI0NTM3LCJuYmYiOjE2Njg1MTY1MzcsImp0aSI6IkRCelpBVjdBRDhMMzZTZ1IifQ.tP5L6xDINQSmWVJsmin2vrjrYFopk-cDNWGkBOlKARg"
          },
          body: JSON.stringify(param10),
        })
      },timeout)
      

    } catch (error) {
      // res.json({ hightprice: "server error" })
      console.log(error) 
    }
  }
});


//**************************************** Changelly Float Transaction ************************* */
app.post("/createTransaction/changelly/float", async (req,res) => {
  const{sell,get,amount,sender_address,refund_address}=req.body;
  console.log(req.body)

  const privateKey = crypto.createPrivateKey({
    key: privateKeyString,
    format: "der",
    type: "pkcs8",
    encoding: "hex",
  });

  const publicKey = crypto.createPublicKey(privateKey).export({
    type: "pkcs1",
    format: "der",
  });

  const message = {
    jsonrpc: "2.0",
    id: "test",
    method: "createTransaction",
    params: {
       from: sell,
       to: get,
       address: sender_address,
       extraId: null,
       amount: amount,
       refundAddress: refund_address
    }
  };
console.log(privateKeyString)
  const signature = crypto.sign(
    "sha256",
    Buffer.from(JSON.stringify(message)),
    {
      key: privateKey,
      type: "pkcs8",
      format: "der",
    }
  );

  const param5 = {
    method: "POST",
    url: "https://api.changelly.com/v2",  
    headers: {
      "Content-Type": "application/json", 
      "X-Api-Key": crypto
        .createHash("sha256")
        .update(publicKey) 
        .digest("base64"),
      "X-Api-Signature": signature.toString("base64"),
    },
    body: JSON.stringify(message),
  };

  request(param5, async function (error, response) {
      const data = await JSON.parse(response.body);
      console.log(data)    
      res.json(data)
  })

});

//**************************************** Changelly Fixed Transaction ************************* */
app.post("/createTransaction/changelly/float", async (req,res) => {
  const{sell,get,amount,sender_address,refund_address}=req.body;
  console.log(req.body)

  const privateKey = crypto.createPrivateKey({
    key: privateKeyString,
    format: "der",
    type: "pkcs8",
    encoding: "hex",
  });

  const publicKey = crypto.createPublicKey(privateKey).export({
    type: "pkcs1",
    format: "der",
  });

  const message = {
    jsonrpc: "2.0",
    id: "test",
    method: "createTransaction",
    params: {
       from: sell,
       to: get,
       address: sender_address,
       extraId: null,
       amount: amount,
       refundAddress: refund_address
    }
  };
console.log(privateKeyString)
  const signature = crypto.sign(
    "sha256",
    Buffer.from(JSON.stringify(message)),
    {
      key: privateKey,
      type: "pkcs8",
      format: "der",
    }
  );

  const param5 = {
    method: "POST",
    url: "https://api.changelly.com/v2",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": crypto
        .createHash("sha256")
        .update(publicKey)
        .digest("base64"),
      "X-Api-Signature": signature.toString("base64"),
    },
    body: JSON.stringify(message),
  };

  request(param5, async function (error, response) {
      const data = await JSON.parse(response.body);
      console.log(data)    
      res.json(data)
  })

});

//**************************************** Changenow Floating Transactions ************************* */
app.post("/createTransaction/changenow/float", async (req,res) => {
  
  const {sell,get,amount,recieving_Address,refund_Address,email}=req.body
  console.log("changenow")
    console.log(req.body)

  
  const url = "https://api.changenow.io/v1/transactions/3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c";
  
  const params={
 from: sell,
 to: get,
 address: recieving_Address,
 amount: amount,
 userId: "",
 contactEmail: email,
 refundAddress: refund_Address,
 refundExtraId: ""
}

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)
  const data= await response.json()
  res.json(data)

});

//**************************************** Changenow Fixed Transactions ************************* */
app.post("/createTransaction/changenow/fixed", async (req,res) => {
  
    console.log("changenow fixed")

  const {sell,get,amount,recieving_Address,refund_Address,email,rateId}=req.body
  
  const url = "https://api.changenow.io/v1/transactions/fixed-rate/3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c";
  
  const params={
    
      from: sell,
      to: get,
      address: recieving_Address,
      amount: amount,
      userId: "",
      contactEmail: email,
      refundAddress: refund_Address,
      refundExtraId: "",
      rateId:rateId   
  }

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)
  const data= await response.json()
  res.json(data)

});

//**************************************** StealthEX Float Transactions ************************* */
app.post("/createTransaction/StealthEX/float", async (req,res) => {
  
    console.log("StealthEX")

  const {sell,get,amount,recieving_Address,refund_Address,email,rateId}=req.body
  
  const url = "https://api.stealthex.io/api/v2/exchange?api_key=fc69c031-976a-4e7f-b3db-e18f758bed5d";
  
  const params={    

        currency_from: sell,
        currency_to: get,
        address_to: recieving_Address,
        amount_from: amount,
        fixed:"false",
        refund_address:refund_Address,
        api_key:"6cbd846e-a085-4505-afeb-8fca0d650c58"
  }

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)
  const data= await response.json()
  res.json(data)

});

//**************************************** StealthEX Fixed Transactions ************************* */
app.post("/createTransaction/StealthEX/fixed", async (req,res) => {
  
  console.log("StealthEX fixed")
  const {sell,get,amount,recieving_Address,refund_Address,email,rateId}=req.body
  
  const url = "https://api.stealthex.io/api/v2/exchange?api_key=fc69c031-976a-4e7f-b3db-e18f758bed5d";
  
  const params={    

        currency_from: sell,
        currency_to: get,
        address_to: recieving_Address,
        amount_from: amount,
        fixed:"true",
        refund_address:refund_Address,
        api_key:"6cbd846e-a085-4505-afeb-8fca0d650c58",
        "rate_id":rateId
  }

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)
  const data= await response.json()
  res.json(data)

});


//**************************************** Exolix Float Transactions ************************* */
app.post("/createTransaction/Exolix/float", async (req,res) => {

    console.log("Exolix")

  const {sell,get,amount,recieving_Address,refund_Address,email,rateId}=req.body
  console.log(req.body)

  const url = "https://exolix.com/api/v2/transactions";
  
  const params={    

      coinFrom: sell.toUpperCase(),
      coinTo: get.toUpperCase(),
      amount: amount,
      withdrawalAddress:recieving_Address,
      refundAddress: refund_Address,
      rateType: "float"
    
  }

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRyYXp0aWs5OUBnbWFpbC5jb20iLCJzdWIiOjI1NzE2LCJpYXQiOjE2Njg1MTUxNTQsImV4cCI6MTgyNjMwMzE1NH0.X42sQ6iHsGiP0nXA9o_ln89CiuOYnLx5vLqF4M-hf54"
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)
  const data= await response.json()
  console.log(data)
  res.json(data)

});

//**************************************** Exolix Fixed Transactions ************************* */
app.post("/createTransaction/Exolix/fixed", async (req,res) => {
  
  console.log("Exolix fixed")

  const {sell,get,amount,recieving_Address,refund_Address,email,rateId}=req.body
  console.log(req.body)

  const url = "https://exolix.com/api/v2/transactions";
  
  const params={    

      coinFrom: sell.toUpperCase(),
      coinTo: get.toUpperCase(),
      amount: amount,
      withdrawalAddress:recieving_Address,
      refundAddress: refund_Address,
      rateType: "fixed"
    
  }

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRyYXp0aWs5OUBnbWFpbC5jb20iLCJzdWIiOjI1NzE2LCJpYXQiOjE2Njg1MTUxNTQsImV4cCI6MTgyNjMwMzE1NH0.X42sQ6iHsGiP0nXA9o_ln89CiuOYnLx5vLqF4M-hf54"
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)
  console.log(response)
  const data= await response.json()
  console.log(data)
  res.json(data)

});

//**************************************** Simpleswap Fixed Transactions ************************* */
app.post("/createTransaction/Simpleswap/float", async (req,res) => {
  
  console.log("Simpleswap")

  const {sell,get,amount,recieving_Address,refund_Address,email,rateId}=req.body
  console.log(req.body)

  const url = "https://api.simpleswap.io/create_exchange?api_key=ae57f22d-7a23-4dbe-9881-624b2e147759";
  
  const params={    

        fixed: false,
        currency_from: sell,
        currency_to: get,
        amount: amount,
        address_to: recieving_Address,
        extra_id_to: "",
        user_refund_address: refund_Address,
        user_refund_extra_id: ""      
    
  }

  const options={  
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "api_key":"ae57f22d-7a23-4dbe-9881-624b2e147759"
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)
  
  const data= await response.json()

  res.json(data)

});

//**************************************** Simpleswap Fixed Transactions ************************* */
app.post("/createTransaction/Simpleswap/fixed", async (req,res) => {
  
  const {sell,get,amount,recieving_Address,refund_Address,email,rateId}=req.body
  console.log(req.body)

  const url = "https://api.simpleswap.io/create_exchange?api_key=ae57f22d-7a23-4dbe-9881-624b2e147759";
  
  const params={    

        fixed: true,
        currency_from: sell,
        currency_to: get,
        amount: amount,
        address_to: recieving_Address,
        extra_id_to: "",
        user_refund_address: refund_Address,
        user_refund_extra_id: ""      
    
  }

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "api_key":"ae57f22d-7a23-4dbe-9881-624b2e147759"
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)

  const data= await response.json()

  res.json(data)

});

//**************************************** Changehero Float Transactions ************************* */
app.post("/createTransaction/Changehero/float", async (req,res) => {
  
  const {sell,get,amount,recieving_Address,refund_Address,email,rateId}=req.body
  console.log(req.body)

  const url = "https://api.changehero.io/v2/";
  
  const params={    

          jsonrpc: "2.0",
          method: "createFixTransaction",
          params: {
            from: sell,
            to: get,
            address:recieving_Address,
            amount:amount,
            refundAddress:refund_Address
          }
  }

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "api-key":"46799cd819854116907d2a6f54926157"
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)


  const data= await response.json()

  console.log(data)

  res.json(data)

});

//**************************************** Changehero Fixed Transactions ************************* */
app.post("/createTransaction/Changehero/fixed", async (req,res) => {
  
  const {sell,get,amount,recieving_Address,refund_Address,email,rateId}=req.body

  console.log("Changehero Fixed")

  console.log(req.body)

  const url = "https://api.changehero.io/v2/";
  
  const params={    

          jsonrpc: "2.0",
          method: "createFixTransaction",
          params: {
            rateId:rateId,
            from: sell,
            to: get,
            address:recieving_Address,
            amount:amount,
            refundAddress:refund_Address
          }

  }

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "api-key":"46799cd819854116907d2a6f54926157"
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)


  const data= await response.json()

  console.log(data)

  res.json(data)

});


//**************************************** Godex Float Transactions ************************* */
app.post("/createTransaction/Godex/float", async (req,res) => {
  
  const {sell,get,amount,recieving_Address,refund_Address,email,rateId}=req.body
  console.log(req.body)

  const url = "https://api.godex.io/api/v1/transaction?affiliate_id=sZnGAGyVu";
  
  const params={    

            coin_from: sell.toUpperCase(),
            coin_to: get.toUpperCase(),
            deposit_amount: amount,
            withdrawal: recieving_Address,
            withdrawal_extra_id:"",
            return: refund_Address

}

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Accept":"application/json",
      "public-key":"lPM1O83kxGXJn9C0IgtKb8E/3EN1kWX3PnLF3EGl6NaFN8cvxi+kj9j+18kum12pdDWIbpTqy6/kVRMxGsE=a7f7a513cbc3ecbeb81eda9cff3182f3"
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)


  const data= await response.json()

  console.log(data)

  res.json(data)

});
 
 
//**************************************** Letsexchange Float Transactions ************************* */
app.post("/createTransaction/Letsexchange/float", async (req,res) => {
  console.log("letsexchange")
  const {sell,get,amount,recieving_Address,refund_Address,email,rateId, recieving_Extra_Id}=req.body
  console.log(req.body)

  const url = "https://api.letsexchange.io/api/v1/transaction";
  
  const params={    
    
      float:"false",
      coin_from: sell.toUpperCase(),
      coin_to: get.toUpperCase(),
      deposit_amount: amount,
      withdrawal: recieving_Address,
      withdrawal_extra_id:recieving_Extra_Id,
      return:refund_Address

}

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImRhdGEiOnsiaWQiOjE3NCwiaGFzaCI6ImV5SnBkaUk2SWxJNGRXTlhWMlZvU1c5bVFVOU9NVlY2WmpSQmFuYzlQU0lzSW5aaGJIVmxJam9pYmxaR2FWcDJWM1pYWVZsa1hDOW9LMnBXWlZsb2JVdzBkVGgzZVhVMGIzTnlaVmxDTm5SQlJVSXhPVE5NZEVadFZsVnROR3RQSzI0MVVHaDRhblpRWjJnMlZqbFFNekpIT0RCNVV6VjFSekJLY0ZVMmFtTnFhM0pqT0cxeE5sRnlNa0l3UVhOblUwUllaelpyUFNJc0ltMWhZeUk2SWpVd01qazBNVFU1T1RWaU9UWTJPR0l5T0dGbFpEVmhZMlJsTWpReU1HUTNPVEV3TkROall6STVabVUzTnprNU5HUmxORGMwTkdFNU1XWTROemRqTjJNaWZRPT0ifSwiaXNzIjoiaHR0cHM6XC9cL2xldHMtbmdpbngtc3ZjXC9hcGlcL3YxXC9hcGkta2V5IiwiaWF0IjoxNjgzMTgyMjI4LCJleHAiOjIwMDQ1OTAyMjgsIm5iZiI6MTY4MzE4MjIyOCwianRpIjoiUkZVa1hFb0Nwd2xncUc0WiJ9._oAGxTTtlx1yDWkHHmQLYiVZ5FY50Urtn2CmLv4gW28",
      "Accept":"application/json",
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)


  const data= await response.json()

  console.log(data)

  res.json(data)

});

//**************************************** Letsexchange Fixed Transactions ************************* */
app.post("/createTransaction/Letsexchange/fixed", async (req,res) => {
  console.log("letsexchange_fixed")

  const {sell,get,amount,recieving_Address,refund_Address,email,rateId, recieving_Extra_Id}=req.body
  console.log(req.body)

  const url = "https://api.letsexchange.io/api/v1/transaction";
  
  const params={    
    
      float:"true",
      coin_from: sell.toUpperCase(),
      coin_to: get.toUpperCase(),
      deposit_amount: amount,
      withdrawal: recieving_Address,
      withdrawal_extra_id:recieving_Extra_Id,
      return:refund_Address,
      rate_id:rateId
}

  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImRhdGEiOnsiaWQiOjE3NCwiaGFzaCI6ImV5SnBkaUk2SWxJNGRXTlhWMlZvU1c5bVFVOU9NVlY2WmpSQmFuYzlQU0lzSW5aaGJIVmxJam9pYmxaR2FWcDJWM1pYWVZsa1hDOW9LMnBXWlZsb2JVdzBkVGgzZVhVMGIzTnlaVmxDTm5SQlJVSXhPVE5NZEVadFZsVnROR3RQSzI0MVVHaDRhblpRWjJnMlZqbFFNekpIT0RCNVV6VjFSekJLY0ZVMmFtTnFhM0pqT0cxeE5sRnlNa0l3UVhOblUwUllaelpyUFNJc0ltMWhZeUk2SWpVd01qazBNVFU1T1RWaU9UWTJPR0l5T0dGbFpEVmhZMlJsTWpReU1HUTNPVEV3TkROall6STVabVUzTnprNU5HUmxORGMwTkdFNU1XWTROemRqTjJNaWZRPT0ifSwiaXNzIjoiaHR0cHM6XC9cL2xldHMtbmdpbngtc3ZjXC9hcGlcL3YxXC9hcGkta2V5IiwiaWF0IjoxNjgzMTgyMjI4LCJleHAiOjIwMDQ1OTAyMjgsIm5iZiI6MTY4MzE4MjIyOCwianRpIjoiUkZVa1hFb0Nwd2xncUc0WiJ9._oAGxTTtlx1yDWkHHmQLYiVZ5FY50Urtn2CmLv4gW28",
      "Accept":"application/json",
    },
    body:JSON.stringify(params)
  }

  const response= await fetch(url,options)


  const data= await response.json()

  console.log(data)

  res.json(data)

});


//***************************************** Transaction Status ********************************** */

//**************************************** Changenow Transaction Status **************************** */
app.post("/transactionStatus/Changenow", async (req,res)=>{

  const {id}=req.body

  const url = `https://api.changenow.io/v2/exchange/by-id?id=${id}`;
  
  const params={    

}
  const options={
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      "x-changenow-api-key":"3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c",
    },
  }

  const response= await fetch(url,options)

  const data= await response.json()

  console.log(data)

  res.json(data)

})

//**************************************** StealthEX Transaction Status **************************** */
app.post("/transactionStatus/StealthEX", async (req,res)=>{

  const {id}=req.body

  const url = `https://api.stealthex.io/api/v2/exchange/${id}?api_key=fc69c031-976a-4e7f-b3db-e18f758bed5d`;
  
  const params={    

}
  const options={ 
    method:"GET",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const response= await fetch(url,options)

  const data= await response.json()

  console.log(data)

  res.json(data)

})

//**************************************** Exolix Transaction Status **************************** */
app.post("/transactionStatus/Exolix", async (req,res)=>{

  const {id}=req.body

  const url = `https://exolix.com/api/v2/transactions/${id}`;
  console.log(url)
  
  const params={    

}
  const options={ 
    method:"GET",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const response= await fetch(url,options)

  const data= await response.json()

  console.log(data) 

  res.json(data)

})

//**************************************** Simpleswap Transaction Status **************************** */
app.post("/transactionStatus/Simpleswap", async (req,res)=>{

  const {id}=req.body

  const url = `https://api.simpleswap.io/get_exchange?api_key=ae57f22d-7a23-4dbe-9881-624b2e147759&id=${id}`;
  console.log(url)
  
  const params={  
}

  const options={ 
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      "Accept":"application/json"
    },
    // body:JSON.stringify(params)
}

  const response= await fetch(url,options)

  const data= await response.json()

  console.log(data) 

  res.json(data)

}) 

//**************************************** Changehero Transaction Status **************************** */
app.post("/transactionStatus/Changehero", async (req,res)=>{

  const {id}=req.body

  const url = `https://api.changehero.io/v2/`;
  console.log(url)
  
  const params={    

    jsonrpc: "2.0",
    method: "getStatus",
    id:id
}

  const options={ 
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(params)

}

  const response= await fetch(url,options)

  const data= await response.json()

  console.log(data) 

  res.json(data)

})

//**************************************** Godex Transaction Status **************************** */
app.post("/transactionStatus/Godex", async (req,res)=>{

  const {id}=req.body

  const url = `http://api.godex.io/api/v1/transaction/${id}`;
  console.log(url)
  
  const params={    }

  const options={ 
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      "Accept":"application/json"
    },
    // body:JSON.stringify(params)
}

  const response= await fetch(url,options)

  const data= await response.json()

  console.log(data) 

  res.json(data)

})

//**************************************** Letsexchange Transaction Status **************************** */
app.post("/transactionStatus/Letsexchange", async (req,res)=>{

  const {id}=req.body

  const url = `https://api.letsexchange.io/api/v1/transaction/${id}/status`;

  console.log(url)

  const params={    }

  const options={ 
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImRhdGEiOnsiaWQiOjE3NCwiaGFzaCI6ImV5SnBkaUk2SWxJNGRXTlhWMlZvU1c5bVFVOU9NVlY2WmpSQmFuYzlQU0lzSW5aaGJIVmxJam9pYmxaR2FWcDJWM1pYWVZsa1hDOW9LMnBXWlZsb2JVdzBkVGgzZVhVMGIzTnlaVmxDTm5SQlJVSXhPVE5NZEVadFZsVnROR3RQSzI0MVVHaDRhblpRWjJnMlZqbFFNekpIT0RCNVV6VjFSekJLY0ZVMmFtTnFhM0pqT0cxeE5sRnlNa0l3UVhOblUwUllaelpyUFNJc0ltMWhZeUk2SWpVd01qazBNVFU1T1RWaU9UWTJPR0l5T0dGbFpEVmhZMlJsTWpReU1HUTNPVEV3TkROall6STVabVUzTnprNU5HUmxORGMwTkdFNU1XWTROemRqTjJNaWZRPT0ifSwiaXNzIjoiaHR0cHM6XC9cL2xldHMtbmdpbngtc3ZjXC9hcGlcL3YxXC9hcGkta2V5IiwiaWF0IjoxNjgzMTgyMjI4LCJleHAiOjIwMDQ1OTAyMjgsIm5iZiI6MTY4MzE4MjIyOCwianRpIjoiUkZVa1hFb0Nwd2xncUc0WiJ9._oAGxTTtlx1yDWkHHmQLYiVZ5FY50Urtn2CmLv4gW28",
      "Accept":"application/json",
    },
    // body:JSON.stringify(params)
}

  const response= await fetch(url,options)

  const data= await response.text();

  console.log(data) 

  res.json({status:data})

})

app.post("/minamount",async(req,res)=>{
console.log(req.body)
  const {sel,get}=req.body
  const url="https://api.changehero.io/v2/"; 

  const params={
    jsonrpc: "2.0",
    id: "test",
    method: "getMinAmount",
    params: {
      from: sel,
      to: get
    }
  }

const options={
method:"POST",
headers: {
"Content-Type": "application/json",
"api-key":"46799cd819854116907d2a6f54926157"
},
body:JSON.stringify(params)
}

const response= await fetch(url,options)


const data= await response.json()

console.log(data)

res.json(data)
 
})


app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT)+"5002";
});



