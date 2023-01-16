import React, { useEffect } from "react";
import lookup from "../apis/lookup";
import moment from 'moment';


let token = null;
let nomineeResponse;
var json= [];


const ShowData = values => {
var arr=window.arr;
var genderValue=0;
  console.log(values);
  // console.log("win array",arr);
  if(values.gender==="Male"){
    genderValue=500;
  }else if(values.gender==="Female"){
    genderValue=501;
  }else{
    genderValue=502;
  }
  const dat=(async () => {
    window.confirm("Press ok to submit form.")
    const responses = await lookup.get('/thor-token-management/api/v1/jwt-token');
   
    var dateString = moment(values.dob).format('DD/MM/YYYY hh:mm:ss');

    //Primary party
    token = responses.data.responseObject
    const response = await lookup.post('/thor-partyservices/api/v1/party', {
      "firstName": values.firstName,
      "lastName": values.lastName,
      "partyTypeId": "102",
       "gender": genderValue,
      
     
      "partyAttribute":[{
        "tag":"dob",
        "value":dateString
      },{
        "tag":"pan",
        "value":values.pan
      },
    {
      "tag":"nationality",
        "value":values.nationality
    },{
      "tag":"accountType",
      "value":values.accountType
    },{
      "tag":"profession",
      "value": values.profession
    },{
      "tag":"ifscCode",
      "value":values.ifscCode
    },{
      "tag":"netWorth",
      "value": values.netWorth
    },{
      "tag":"accountNo",
      "value": values.accountNo
    },{
      "tag":"accountName",
      "value": values.accountName
    }
    ]
    }, {
      headers: {
        Token: token,
        issuer: 'epi',
        userId: '1212'
      }
    });
    const partyId = response.data.responseListObject[0].partyId;
    const appId = response.data.responseListObject[0].appId;
  
    const res = await lookup.post('/thor-partyservices/api/v1/party/address',[{
      partyId: partyId,
        appId: appId,
        addressType: "401",
      "address1": values.address1,
      "state": values.state,
      "country": values.country
    }],{
      headers:{
        Token: token,
        issuer: 'epi',
        userId: '1212',
             
      }
    });

    json = values.nominee;
    console.log("json: ",json);

    for(var index in arr){
      if(arr.hasOwnProperty(index)){
        await lookup.post('/thor-documentmanagement/api/v1/document', {
          storageLocation: "AWS",
          replaceIfExists: 1,
          buId: "1",
          bucketTag: "thor-project-pawan",
          documentTag: "Test",
          documentType:arr[index].fileType,
          partyId: partyId,
          documentKey:arr[index].fileType,
          documentName: arr[index].fileName,
        documentHash: arr[index].base64,
        }, {
          headers: {
            Token: token,
            issuer: 'epi',
            userId: '1212'
            
          }
        }).then((response) => {
          
        });
      }
    }

//Secondary party
for (var key in json) {
  if (json.hasOwnProperty(key)) {
     nomineeResponse = await lookup.post('/thor-partyservices/api/v1/party', {
      "firstName": json[key].nomineeFirstName,
      "lastName": json[key].nomineeLastName
    }, 
    {
      headers: {
        Token: token,
        issuer: 'epi',
        userId: '1212'
      }
    });
    const secPartyid = nomineeResponse.data.responseListObject[0].partyId
    const secAppId = response.data.responseListObject[0].appId;
    await lookup.post('/thor-partyservices/api/v1/party/address',[{
      partyId: partyId,
        appId: secAppId,
        addressType: "401",
      "address1": json[key].nomineeAddress,
      "state": json[key].nomineeState,
      "country": json[key].nomineeCountry
    }],{
      headers:{
        Token: token,
        issuer: 'epi',
        userId: '1212',
             
      }
    });
    await lookup.post('/thor-partyrelationship/api/v1/relation/_add',{
      "requestInfo": {
        "applicationId": "11101",
        "buId": "1",
        "subBuId": "0",
        "action": "save",
        "issuer": "epi",
        "userlogin": "shantesh@privacydatasystems.com",
        "environment": "local",
        "userId": "1",
        "token": token,
        "jtitoken": token
    },
    "partyUserMapRequest": {
        "partyId": partyId,
        "relatedPartyId":secPartyid,
        "relationshipId": json[key].nomineeRelation,
        "mappedvalue": "alocation value"
    }
    },{
      headers:{
        Token: token,
        userId: '1'
      }
    })
  }
}
  
  

    alert("Form submitted !!!")
  })()
console.log("now");

return;

//   setTimeout(function(){
//     window.location.reload(1);
//  }, 5000);
}
export default ShowData;