const  express =  require('express');
const  cors = require('cors');
const fileUplaod = require('express-fileupload');
const pdfParse = require('pdf-parse'); 
const app = express();

const PORT = process.env.PORT || 9000;
app.use(cors());

app.use(fileUplaod());
app.use(express.json());
app.get('/',(req,Res) => {
   Res.send('Hello');
})
app.post('/post', async (req,res) => {
   if(req.files === null) res.send('error occucured');
      const pdf = req.files.PDF;
      console.log(pdf);
      const result = await pdfParse(pdf);
      console.log(result);
      res.send({'text':result.text});
      
})

app.listen(PORT,() => {console.log('server is working')})
/*
    ***********FORMAT FOR SENDING FILES**************
   
   const formData = new FormData();
   formData.append('json_name', file);
   const res = await axios.post('http://localhost:9000/post', formData)


*/              