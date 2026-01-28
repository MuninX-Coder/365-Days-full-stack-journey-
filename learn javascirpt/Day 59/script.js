// break and continue 

// break - loop ko rokne ke lye hotai 

for(let i = 1; i<200; i++){
    console.log(i);
    if(i === 38){
        break;   // jaise i 38 hoga loop ruk jao, and age ka code run maat huo
    }
}


// continue - used to avoid, isko avoid karo and next sai continue karo

for(let i = 1; i<50; i++){
   
    if(i === 30){
        continue;   // jaise he i 30 ho usko skip karo and 31 sai print karo 
    }
     console.log(i);
}


// FUNCTIONS - ek block of code jisko ham luk bar bar call karega and woh run hoga

function myfnc(val){  // yeh mera function hai uska naam myfnc hai and woh val naak ka ek variable lega

}
myfnc();   // calling the function


// extra ways to make functions

let fnc = function(){          // when we create a function using a variable let, var, const then its said as functio expression
    console.log("Munin");
}
fnc();  // calling the function


// function declaration 

function myff(){         // yahi hai function decelare karna 
    console.log("Munin");
}
myff(); // calling the function


// arrow function - ek short way bolsaktai function likhne ka tarika, cool type lagtai 

let arrFnc = ()=>{
    console.log("arrow function");
}
arrFnc();

// ek arrFnc naam ka function banayai, also flat arrow function v boltai
// () = > {}
// () - fat,  iska andar ham luk variable le tai
// =>  - arrow 
// {}  -- andar ka code  function


// paramaters and arguments 

// parameters - basically woh value hai jo function letai 
// arugument - basically woh value hai jo ham luk function ko detai

// eg

function dance(value1){
    console.log(`${value1} nach raha hai `);
}

dance("Munin");
dance("raghav");

// jo function value lerai   value1  bolke yeh hotai parameters and jo ham luk derai   deance("munin")  yeh hogeya arguments, and we can give multiple values 


// Defalult    rest and spread parameter 

// default - jab ham luk ek function banatai and then usme kuch value dena hotai but ham luk nai detai tho uss error sai bachne ke lye ham luk ek default value phele sai  deke rakh detai 

function add (v1 = 0, v2 = 0){ // ek defalut value deyai,  v1 = 0, and v2 = 0,   agar value nai detai fir yeh value use hoga
    console.log(v1 + v2);
}
add();   // kuch value nai deyai, tho default value ka use karega 


// rest - 