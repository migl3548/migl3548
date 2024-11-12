const p = document.getElementById('text');
const callButton = document.getElementById("call");

function fetchData(){
    //in class example 
    fetch('https://catfact.ninja/fact')
        .then(res => {
            if(res.ok){
                return res.json();
            }else{
                console.log(res);
            }
        }).then(res=> {
            const myData = res.fact;
            console.log(myData);
            p.innerHTML = myData;
        })
        .catch(error => {console.log(error); alert("broke")})
}

fetchData();


document.getElementById("call").addEventListener("click", e => { fetchData(); });    
console.log(myData);

// p.innerHTML = myData;

