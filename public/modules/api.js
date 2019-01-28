function Login() 
{
    var email    = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    var status   = document.getElementById ('loginstatus');
    var url      = '/account/Login/'+ email + '/' + password;

if (email != null && password != null && email != '' && password != '')
    {
        superagent
        .get (url)
        .end (function (err, res)
        {
            if (err) 
                {
                    console.log (err);
                }
            else
            {
                if (res.body)
                {
                    console.log(res.body);
                    status.innerHTML ='Welcome: '+ email + '<br>' + ' Your are now logged in';
                    setTimeout(function(){status.innerHTML ='';},3000);

                }
                else
                {
                    console.log ('Login Failed: Incorrect email or password');
                    status.innerHTML ='Login Failed!';
                    setTimeout(function(){status.innerHTML ='';},3000);
                }
                
               
            }

        });
    }
 else 
    {
        status.innerHTML = 'Login and Password required!';
        setTimeout(function(){status.innerHTML ='';},3000);
    }
}


function Create() 
{
    var name     =  document.getElementById('name').value;
    var email    =  document.getElementById('email').value;
    var password =  document.getElementById('password').value;
    var status   =  document.getElementById ('createstatus');
    var url      =  '/account/Create/' + name + '/' + email + '/' + password;
 
 if (name != null && email != null && password != null && name != '' && email != '' && password != '') 
   
     {
        superagent
            .get (url)
            .end (function (err, res)
            {
                if (err) 
                {
                    console.log (err);
                    status.innerHTML ='Request Failed!';
                    setTimeout(function(){status.innerHTML ='';},3000);
                }
                else
                {
                    if ((res.text) !=null && (res.text) != '')
                    {
                        console.log(res.text);
                        status.innerHTML ='Account Created! ' + name;
                        setTimeout(function(){status.innerHTML ='';},3000);    
                    }
                    else
                    {
                        console.log('Account Already Exists!');
                        status.innerHTML ='Account Already Exists!';
                        setTimeout(function(){status.innerHTML ='';},3000);

                    }
                }

            });
    }
 else 
    {
        status.innerHTML = 'Account Details are required!';

    }
            
}


function Deposit() 
{
    var email   = document.getElementById('depositEmail').value;
    var amount  = document.getElementById('depositAmount').value;
    var status  = document.getElementById('depositstatus');
    var url     = '/account/Deposit/'+ email + '/' + amount;

if (email != null && amount != null && email != '' && amount != '' && amount > 0)
{

    superagent
        .get (url)
        .end (function (err, res)
        {
            if (err) 
            {
                console.log (err);
                status.innerHTML ='Request Failed!';
            }
            else
            {
                if (res.body)
                {

                    console.log (res.body);
                    status.innerHTML = 'Total amount deposited: $' + amount;
                    setTimeout(function(){status.innerHTML='';},3000);   

                }
                else
                {

                     console.log ('Deposit Failed!');
                     status.innerHTML ='Deposit Failed!';
                     setTimeout(function(){status.innerHTML='';},3000);
               
                }
            }

        });
}
else 
    {
        status.innerHTML = 'Email and $$ Fields are required';
        setTimeout(function(){status.innerHTML ='';},3000);
    }

}


function Withdraw() 
{
    var email   = document.getElementById('withdrawEmail').value;
    var amount  = document.getElementById('withdrawAmount').value;
    var status  = document.getElementById('withdrawstatus');
    var url     = '/account/Withdraw/'+ email + '/' + amount;

 if (email != null && amount != null && email != '' && amount != '' && amount > 0)
    {

        superagent
        .get (url)
        .end (function (err, res)
        {
            if (err) 
            {
                console.log (err);
                status.innerHTML ='Request Failed!';
                setTimeout(function(){status.innerHTML='';},3000); 
            }
            else
            {
                if (res.body)
                {

                    console.log (res.body);
                    status.innerHTML = 'Total amount withdrawn: $' + amount;
                    setTimeout(function(){status.innerHTML='';},3000); 

                }
                else
                {

                     console.log ('Withdraw Failed or Insufficient Balance!');
                     status.innerHTML ='Withdraw Failed or Insufficient Balance!';
                     setTimeout(function(){status.innerHTML='';},3000);
               
                }
            
            }
        });
    }

    else
    {
        status.innerHTML = 'Email and Amount Field is required!';
        setTimeout(function(){status.innerHTML ='';},3000);
    }

}

function Balance() 
{
    var email   = document.getElementById('balanceEmail').value;
    var status  = document.getElementById('balancestatus');
    var url     = '/account/Balance/'+ email;
 
 if (email != null && email != '') 
 {
    superagent
        .get (url)
        .end (function (err, res)
        {
            if (err) 
            {
                console.log (err);
            }
            else
            {
                if (res.text)
                {
                    console.log (res.text);
                    status.innerHTML = 'Your available balance is: $' + res.text;
                    setTimeout(function(){status.innerHTML='';},3000);   
                }
                else
                {
                    console.log ('Account Not Found!');
                    status.innerHTML ='Account Not Found!';
                    setTimeout(function(){status.innerHTML='';},3000);
                } 

            }
             
        });
                     
 }
 else
    {
        status.innerHTML = "Email Field is required!";
        setTimeout(function(){status.innerHTML ='';},3000);
    }

}


function AllData() 
{   
     var status   =  document.getElementById ('AllDatastatus');
     var url    = '/account/AllData';
     superagent
        .get (url)
        .end (function (err, res)
        {
            if (err) 
            {
                console.log (err);
            }
            else
            {
                if (res.body)
                {
                    console.log (res.body);
                    status.innerHTML = JSON.stringify(res.body);
                   
                }
                else
                {
                    console.log ('No Data!');
                    status.innerHTML ='No Data!';
                   
                } 

            }
             
        });

}

function Transactions() 
{
    var email   = document.getElementById('transactionEmail').value;
    var status  = document.getElementById('transactionstatus');
    var url     = '/account/Transactions/'+ email;

if (email != null && email != '')
 {

    superagent
        .get (url)
        .end (function (err, res)
        {
            if (err) 
            {
                console.log (err);
            }
            else
            {
                if (res.body)
                {
                    console.log (res.body);
                    status.innerHTML = 'Transaction data here';   
                    setTimeout(function(){status.innerHTML='';},3000);
                }
                else
                {

                    console.log ('Transaction Failed!');
                    status.innerHTML ='Transaction Failed!';
                    setTimeout(function(){status.innerHTML='';},3000);
               
                }        

            }
             
        });
 }
 else
    {
        status.innerHTML = "Email Field is required!";
        setTimeout(function(){status.innerHTML ='';},3000);
    }

}

