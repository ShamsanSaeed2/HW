
var UserInterface = {};




 UserInterface.navigation = `
 
 <!-- Global Navigation Tab links -->
<div class="tab">
<button class="tablinks" onclick="defaultModule()">Home Page</button>
<button class="tablinks" onclick="loadCreateAccount()">Create Account</button>
<button class="tablinks" onclick="loadLogin()">Login</button>
<button class="tablinks" onclick="loadDeposit()">Deposit</button>
<button class="tablinks" onclick="loadWithdraw()">Withdraw</button>
<button class="tablinks" onclick="loadTransactions()">Transactions</button>
<button class="tablinks" onclick="loadBalance()">Balance</button>
<button class="tablinks" onclick="loadAllData()">View All Data</button>
</div>
`;

UserInterface.default = `
<div class="card bg-light mb-2" style="max-width:18rem;">
      <div class="card-body">
        <h5 class="card-title">Welcome to the Sam's bank</h5>
       <img class ="card-img-top" src="bank.png" alt="Card image">
    </div>
</div>
`;

UserInterface.createAccount = `
<div class="card text-white bg-primary mb-3 " style="max-width: 18rem;">
 <div class="card-header">Create Account</div>
    <div class="card-body">
     <form>
        <div class="form-group">
         <label for="name">Name</label>
         <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
         <label for="email">Email address</label>
         <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
         <label for="password">Password</label>
         <input type="password" class="form-control" id="password">
        </div>
        <div class="form-group" "col-sm-10">
         <button type="button" class="btn btn-light btn-sm" onclick="Create()">Create Account</button>
        </div>
        <div id ='createstatus'></div>
      </form>
    </div>
</div>
`;

UserInterface.login = `
<div class="card text-white bg-secondary mb-3 " style="max-width: 18rem;">
 <div class="card-header">Login</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="loginEmail">
            </div>
            <div class="form-group">
                <label for="password1">Password</label>
                 <input type="password" class="form-control" id="loginPassword">
            </div>
            <div class="form-group" "col-sm-10">
                <button type="button" class="btn btn-light btn-sm" onclick="Login()">Login</button>
            </div>
            <div id ='loginstatus'></div>
        </form>
    </div>
</div>
`;

UserInterface.deposit = `
<div class="card text-white bg-warning mb-3 " style="max-width: 18rem;">
 <div class="card-header">Deposit</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="depositEmail">
            </div>
            <div class="form-group">
                <label for="amount1">Amount</label>
                <input type="Amount" class="form-control" id="depositAmount">
            </div>
            <div class="form-group" "col-sm-10">
                <button type="button" class="btn btn-light btn-sm" onclick="Deposit()">Deposit</button>
            </div>
            <div id ='depositstatus'></div>   
        </form>
    </div>
</div>
`;

UserInterface.withdraw = `
<div class="card text-white bg-success mb-3 " style="max-width: 18rem;">
 <div class="card-header">Withdraw</div>
    <div class="card-body">
      <form>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="withdrawEmail">
            </div>
            <div class="form-group">
                <label for=" amount1">Amount</label>
                <input type="Amount" class="form-control" id="withdrawAmount">
            </div>
            <div class="form-group" "col-sm-10">
                <button type="button" class="btn btn-light btn-sm" onclick="Withdraw()">Submit</button>
            </div> 
            <div id ='withdrawstatus'></div> 
        </form>

    </div>
</div>
`;

UserInterface.transactions = `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Transactions</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="transactionEmail">
            </div>
            <div class="form-group" "col-sm-10">
                <button type="button" class="btn btn-light btn-sm" onclick="Transactions()">Show Transactions</button>
            </div>
            <div id ='transactionstatus'></div>      
        </form>
    </div>
</div>
`;

UserInterface.balance = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Balance</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email1">Email address</label>
                <input type="email" class="form-control" id="balanceEmail">
            </div>
            <div class="form-group" "col-sm-10">
                <button type="button" class="btn btn-light btn-sm" onclick="Balance()">Show Balance</button>
            </div>
            <div id ='balancestatus'></div>
        </form>
    </div>
</div>
`;


UserInterface.allData = `
<p class= "font-weight-bold ">All Data in Store</p>
<form>
    <div class="form-group" "ml-5">
        <button type="button" class="btn btn-secondary btn-sm" onclick="AllData()">Show All Data</button>
    </div>
    <div id ='AllDatastatus'></div>
<form>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');

navigation.innerHTML += UserInterface.navigation;

var loadCreateAccount = function (){
    target.innerHTML = UserInterface.createAccount;
};

var loadLogin = function (){
    target.innerHTML = UserInterface.login;
};

var loadDeposit = function (){
    target.innerHTML = UserInterface.deposit;
};

var loadWithdraw = function (){
    target.innerHTML = UserInterface.withdraw;
};

var loadTransactions = function (){
    target.innerHTML = UserInterface.transactions;
};

var loadBalance = function (){
    target.innerHTML = UserInterface.balance;
};

var defaultModule = function (){
    target.innerHTML = UserInterface.default;
};

var loadAllData = function (){
    target.innerHTML = UserInterface.allData;
};


defaultModule();

