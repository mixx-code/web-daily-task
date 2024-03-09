const container = document.querySelector("#container");
const input = document.querySelector("#input");
const title = document.querySelector("#title");
const date = document.querySelector("#date");
const agenda = document.querySelector("#agenda");
const hasil = document.querySelector("#hasil");
const btnSimpan = document.querySelector("#btnSimpan");

// const validasi = () => {
//     if(title != "" && date != "" && agenda !=""){
//         return true
//     }else{
//         alert('mohon masukkan data dengan benar!!')
//     }
// }

let dailyTask = [];
const render = (item, i) => {
    return `
        <div id=${i+1} class="title">
        
        ${item.title}
        </div>
        <div id="${i+1}" class="card">
            <span id="${i}" class="hapus">X</span>   
            <p>${item.date}</p>
            <p>${item.agenda}</p>
        </div>
    `
}
const kosong = () => {
    return`
        <p class="kosong">Daily Task Kosong</p>
    `

}
const addDailyTask = (item, i) => {
        hasil.innerHTML += render(item, i)
}

const hapusData = (id) =>{
    var tmp = JSON.parse(localStorage.getItem("dailyTask"));
    localStorage.clear();
    tmp.splice(id, 1);
    
    localStorage.setItem("dailyTask", JSON.stringify(tmp));

    if(localStorage.getItem("dailyTask")){
        dailyTask = JSON.parse(localStorage.getItem("dailyTask"));
        i = 0;
        dailyTask.forEach(item => {
            addDailyTask(item, i);
            i++;
        });
    }else {
        hasil.innerHTML += kosong()
        console.log(kosong())
    }

    title.value= "",
    date.value= "",
    agenda.value= "";
    location.reload();
}




btnSimpan.addEventListener('click', () => {
        dailyTask.push({
            idDailyTask: dailyTask.length,
            title: title.value,
            date: date.value,
            agenda: agenda.value
        })

    localStorage.setItem("dailyTask", JSON.stringify(dailyTask))

    addDailyTask(
        title.value,
        date.value,
        agenda.value,
        idDailyTask = i
    )
    console.log(idDailyTask = i)

    title.value= "",
    date.value= "",
    agenda.value= "";
    location.reload();
})

if(localStorage.getItem("dailyTask")){
    dailyTask = JSON.parse(localStorage.getItem("dailyTask"));
    i = 0;
    dailyTask.forEach(item => {
        addDailyTask(item, i);
        i++;
    });
}else {
    hasil.innerHTML += kosong()
    console.log(kosong)
}
const hapusBtn = document.getElementsByClassName('hapus');
for(var i = 0; i < hapusBtn.length; i++) {
  (function(index) {
    hapusBtn[index].addEventListener("click", function() {
       hapusData(index);
     })
  })(i);
}
const card = document.getElementsByClassName('card');
const judulDaily = document.getElementsByClassName('title');
for (let i = 0; i < card.length; i++){
    const idCard = card[i];
    // console.log('card ==> ',idCard);
    if(idCard.id % 2 != 0){
        idCard.classList.add('hijau');
        
    }else{
        idCard.classList.add('coklat');
    }
    
}
for (let i = 0; i < judulDaily.length; i++){
    const idJudul = judulDaily[i];
    // console.log('card ==> ',idJudul);
    if(idJudul.id % 2 != 0){
        idJudul.classList.add('hijau');
        
    }else{
        idJudul.classList.add('coklat');

    }
    
}

// Store the data with time
const EXPIRE_TIME = 1000*60*60;
localStorage.setItem('dailyTask', JSON.stringify(dailyTask));

// start the time out

setTimeout(function() {
    localStorage.removeItem('dailyTask');   
    location.reload();
}, EXPIRE_TIME); // after an hour it will delete the data

