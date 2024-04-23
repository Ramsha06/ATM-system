#! /usr/bin/env node
import inquirer from "inquirer"

let pin=1234;
let balance=500000;

let pinanswer=await inquirer.prompt([{
    message:"Enter your pin",
    name:"pin",
    type:"password",
}]);
if(pinanswer.pin== pin)
    {
        console.log("correct pin");

        let operations=await inquirer.prompt([{
            message:"Please select an option",
            type:"list",
            name:"opr",
            choices:["withdraw","Fast cash","Deposit","Balance inquiry"],
        },
    ]);

        if (operations.opr == "withdraw")
            {
                let withdraw = await inquirer.prompt([{
                    message:"Enter the amount you want to withdraw",
                    type:"number",
                    name:"wdraw",
                }]);

                if(withdraw.wdraw > balance)
                    {
                        console.log("Insufficiant Balnce!, Please enter amount under your current balance.")
                    }
                  else //if(withdraw.wdraw <= "Balance")
                    {
                       balance-=withdraw.wdraw;
                        console.log(`your remaining balance is ${balance}`);
                    }
            }

            else if(operations.opr === "Fast cash")
                {
                    let fcash = await inquirer.prompt([{
                        message:"Enter the fast cash amount",
                        type:"list",
                        name:"fast",
                        choices:["5000","15000","20000","25000"],
                    }]);

                    if(fcash.fast > balance)
                        {
                            balance-= fcash.fast;
                            console.log("Insufficiant Balnce!, Please enter amount under your current balance.")
                         }
                         else if(fcash.fast <= balance)
                         {
                            balance-=fcash.fast;
                            console.log(`your remaining balance is ${balance}`);

                         }

                }

                else if (operations.opr === "Deposit")
                    {
                    let depositamount= await inquirer.prompt([{

                        message:"Enter the amount you want deposit",
                        name:"depo",
                        type:"number",
                }]);

                balance+= depositamount.depo;
                console.log(`your new balance is now ${balance}`);
            }

            else if(operations.opr == "Balance inquiry")
                {
                    console.log(`your balance is ${balance}`);
                }
                console.log("Thank you for using Atm service");

    }
    else{
        console .log("invalid pin");
    }