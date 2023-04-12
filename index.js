let form=document.getElementById('form');

let table=document.getElementById('data');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    submit();
})
const submit=()=>{
    let first_name=document.getElementById('first-name').value;
    let last_name=document.getElementById('last-name').value;
    let address =document.getElementById('address').value;
    let pincode=document.getElementById('pincode').value;
    let gender=document.getElementById('gender');
    let value_gender=gender.options[gender.selectedIndex].value;
    let food=document.getElementById('food');
    let value_food=food.options[gender.selectedIndex].value;
    let state=document.getElementById('state').value;
    let country=document.getElementById('country').value;

    let newArray=[first_name,last_name,address,pincode,value_gender,value_food,state,country];
    newArray.forEach((item)=>{
        var li=document.createElement("li");
        var text=document.createTextNode(item);
        li.appendChild(text);
        table.appendChild(li)
    });
    form.reset();

}