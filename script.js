async function data() {
    try{
        let res = await fetch("https://api.imgflip.com/get_memes");
        let value = await res.json();
        console.log(value.data.memes)
        let data1 = ""
        value.data.memes.map(ele => {
            data1 += `
                <div class="card">
                <h3 class="card-title">id : ${ele.id}</h3>
                <h3 class="card-title">name : ${ele.name}</h3>
                <img src=${ele.url} alt="img" class="img">
                </div>
                `
        })
        document.getElementById('cards').innerHTML = data1;
    }
    catch(err){
        alert('error occurred ',err)
    }
}

data()

