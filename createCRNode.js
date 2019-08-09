var  express = require('express');
var  app = express();
var  cors = require('cors');
app.use(cors(
));



app.use(express.json());

//var urlencodedParser = bodyParser.urlencoded({extended:false});
//let post= [];
var blogs=[];
app.post("./create", (req, res)=>{
   
    const blog= {
        
        title: req.body.tittle,
        content:req.body.innerContent,

    };
        blogs.push(blog);
      res.json(blog);
       console.log(blogs);

    }) ;
    




const port = process.env.PORT;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
