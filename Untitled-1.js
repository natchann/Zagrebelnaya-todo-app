
// ----------------------------CALLBACK~~~~~~~~~

const func1 = () => console.log(1);

const func2 = (callback) => {
    setTimeout(() => {
        console.log(2);
        callback();
        
    }, 100)
}

console.log(func2(func1));

// --------ASYNC-----------
const func3 = (callback) => {
    setTimeout(() => {
        
       return callback();
        
    }, 100)
     }

     console.log(1);
     const func = () => console.log(2);
     func3(func);
     console.log(3);
     
// ---------------------------------

     const func4 = (callback) => {
        setTimeout(() => {
            const isError = true;
            if(isError){
                return callback("error")
            } 
           return callback(null, "value");
            
        }, 100)
         }
    
   
         const func5 = (error, value) => {
             if (error) {
                 console.log(error);
                 
             } else {
                 console.log(value);
                 
                 
             }
         }
         func4(func5);



         const xhr = new XMLHttpRequest();
         xhr.open('GET', 'json' ,true);

         xhr.onload = function(){ 
         if ( this.status=== 200) { //статус 200 значит все ОК
             console.log(JSON.parse(this.response));
             
         } else {
             
         }
         }
     xhr.send();    
     
     

     const func9 = () => {
         return new Promise((resolve, reject) =>{

         
        setTimeout(() => {
            const isError = true;
            if(isError){
                reject("error")
            } 
                resolve("value");
            
        }, 100)
         })}

      const resultPromoise =   func9();

      resultPromise
         .then(result => console.log(result ));
         .catch(error => console.log(error ));
         
         
         resultPromoise
         .then(result => console.log(result ));
         .catch(error => console.log(error ));

         Promise.all([promise1, promise2]).then(result => console.log(result));
         