import express from 'express';
import getMetaData from 'metadata-scraper';

const app = express();


app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Hello world!"
    });
});

app.post('/getinfo',async (req,res)=>{
   const {url } = req.body;
   if(!url){
    res.status(402).json({
        message:"Provide an url",
    });
   }
   try {
    const metaData = await getMetaData(url);
   return res.status(200).json({metaData});
   } catch (error) {
        res.status(500).json({
            message:"Internal server error"
        });
   }

});


app.listen(process.env.PORT || 4000,()=>{
    console.log('Server is running at 4000');
})