// Setup Server and db

var express = require('express');
var app = express();
var cors = require('cors');
var low = require('lowdb');
var fs = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db = low(adapter);


// setup directory used to serve static files
app.use (express.static('public'));
app.use (cors());

// setup data store
db.defaults (
{ 
    accounts:
    [
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}).write();

// transaction record
var audit=function (action,amount)
{
    var record = 
    {
        action : action,
        amount : amount,
        timestamp: new Date()
    };
    return record;
};

//Check if its existing account,otherwise create new account
app.get('/account/Create/:name/:email/:password',function (req, res) 
{

    var msg ='';
            
    var account = db.get ('accounts')
     .find ({email: req.params.email})
     .value();
       
    if (account)
    {
    
    msg ='Account Already Exists!';
    res.send(null);

    }

    else
    {
        // create account
        db.get ('accounts')
         .push(
            {    name    : req.params.name,
                 email    : req.params.email,
                 password : req.params.password,
                 balance  : 0,
                 transactions :
                 [
                    audit('create',0)
                ]
            })
         .write ();
         msg ='Account Created!';
         res.send(msg);    

    }
        console.log (msg); 

});

app.get('/account/Login/:email/:password', function (req, res) 
{

    var account = db.get ('accounts')
    .find ({email:req.params.email})
    .value();
 
 if (account)
    {
        if (account.password==req.params.password)
        {
            account.transactions.push(audit('login',0));
            res.send(account);
            console.log(account);
        }
        else 
        {
        res.send(null);
        console.log('Incorrect Password!');
        }

    }

 else
   {
    res.send(null);
    console.log('Account not Found!');
   }
       
});



app.get('/account/Deposit/:email/:amount', function (req, res) 
{
    var account = db.get ('accounts')
     .find ({email: req.params.email})
     .value();
    
           
    if (account)

        {
        account.balance = Number(account.balance) + Number(req.params.amount);
        db.get ('accounts')
         .assign(
            {    
                balance  : account.balance             
            })
         .write ();

            account.transactions.push(audit('deposit',req.params.amount));
            console.log (account);
            res.send(account);

        }

    else
    {
      console.log ('Account Not Found!');
      res.send(null);
         
    }

});


app.get('/account/Withdraw/:email/:amount', function (req, res) 
{
    
    var account = db.get ('accounts')
     .find ({email: req.params.email})
     .value();

   if (account)
   {
      if (account.balance >= req.params.amount)
       {
            account.balance = Number(account.balance) - Number (req.params.amount);
            db.get ('accounts')
            .assign(
                {   
                    balance  : account.balance
                })
                .write ();

                account.transactions.push(audit('withdraw',req.params.amount));
                console.log (account);
                res.send(account);
        }

        else
        {
           console.log ("Insufficient Balance!");
           console.log (account);
           res.send(null);
        }
   }
  else
   {
      console.log ('Account Not Found!');
      res.send(null);
         
    }
});

app.get('/account/Transactions/:email', function (req, res) 
{
    
   var account = db.get ('accounts')
     .find ({email: req.params.email})
     .value();

       
    if (account)
    {
     res.send(account.transactions);
     console.log(account.transactions);
    }

    else
    {
      console.log ('Account Not Found!');
      res.send(null);
         
    }

});
   
app.get('/account/Balance/:email', function (req, res) 
{
        
   var account = db.get ('accounts')
     .find ({email: req.params.email})
     .value();
    
     if (account)
        {  
            account.transactions.push(audit('Balance',account.balance));
            console.log (account.balance);
            res.status(200).send(String(account.balance));
        }
    else
        {
            console.log ('Account Not Found!');
            res.send(null);     
        }

});

app.get('/account/AllData', function (req, res) 
{
    var account = db.get('accounts').value();
         
    if (account)
        {
            console.log(account);
            res.send(account);
        }
    else
    {
        console.log ('No Data!');
        res.send(null);
    }
});

// Start Server
//-----------------------------------------
app.listen (3000, function()
{
    console.log ('Running on port 3000');
});