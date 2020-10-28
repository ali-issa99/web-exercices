const x=function(h){
  return h+2


};


const anonymous=function (x:number,y:number){
return x+y



}


console.log(anonymous(1,2))



//we can also use fat-arrow shorthand for a function

const addFunction=(x:number,y:number)=>{

      return x+y;

};
console.log(addFunction(3,4))



type Named={name:String}
const a:Named={name : "ahmad"}
const b:Named={name : "Gemma"}
const c:Named={name : "Gemma"}

const users=[a,b,c]

const predicate =(o:Named): boolean =>{

return o.name==="Bob"


}

//we are going to see if we can find a user name "jon"


const john : Named| undefined =users.find((u) => name ==="jon") 


if(john){


    console.log("true")
}else{


    console.log(false)
}


console.log("My log"+ users.find(o =>o.name="Gemma"))




