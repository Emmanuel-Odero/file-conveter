const express = require('express');
const path = require('path');
const fs = require ("fs")
const docxConverter= require("docx-pdf");

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
//handling the conversion
app.post("/docxtopdfdemo", (req,res)=>{
    docxConverter(inputFile,outputFile, function(err, result){
        var filename = EventTarget.file[0].file
        
        if(err){
            console.log("An error occurred during conversion, its type is: ", err)
        }
        console.log("Results" + result)
})

})

app.listen(port);
console.log('Server started at http://localhost:' + port);