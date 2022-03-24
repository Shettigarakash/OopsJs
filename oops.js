//creating object
let person={
    f_name :'Akash',
    l_name :'Shettigar',
    
    //functon in object
    getFunction: function(){
        return (`person name is
        ${person.f_name}  ${person.l_name}`)
    },
    //object inside object
    phone_no :{
        mbl : 120393,
        landline: 432124
    }
}
console.log(person.getFunction());
console.log(person.phone_no.landline);