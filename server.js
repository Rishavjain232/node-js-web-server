const express=require('express');
const hbs=require('hbs');
var app=express();
hbs.registerPartials(__dirname+'/views/partial');
hbs.registerHelper('date',()=>{
  return new Date().getFullYear();
})
hbs.registerHelper('doupper',(text)=>{
  return text.toUpperCase();
});
app.set('view engine','hbs'); //
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
  // res.send("hello world!!");
   res.render('home.hbs',{
     message:'Welcome to our home page'
   });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{ //yaha btana parta hai ki kha dekhna hai iske liye about.hbs sirf likh diye kyoki jab upar
                              //app.set('view engine') likhe the to isko pta hai views folder m ja k dekhna hoga
                              ///agar views folder nhi hoga to hhumko error milega;
      name:"about",           ///yaha se hum chise html ko bhej rahe hai
      some:"dummy",             ///key value kar k bhejte hai data ko

    });
});
app.get('/bad',(req,res)=>{
  res.send({
    bad:'rishav',
    samjhe:'jain',
  });
});
app.listen(3000,()=>{
  console.log("app is running at port 3000");
});
