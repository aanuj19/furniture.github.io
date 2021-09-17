var t1 = false;
var t2 = false;
var t3 = false;
var t4 = false;

let button1 = document.getElementById('button-1');


const fetchData = () => {
    const data = {"room":"living room", "appliance" : "bulb1", "status" : "on/off"};

    fetch('https://webappdemo.casaaltair.com/appliance', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        console.log('Success:', res.data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}


button1.addEventListener('click', function(){
    if (t1==false) {
        
            document.querySelector('.container-1').style.background = "#E3711E";
            document.querySelector('#air_cond').style.color = '#FFFFFF';
            document.querySelector('#air_cond_type').style.color = '#FFFFFF';
            // document.querySelector('ac_img svg path').style.fill = '#FFFFFF'   
            fetchData()
        t1 = true;
    } else {
        document.querySelector('.container-1').style.background = "#FFFFFF";
        document.querySelector('#air_cond').style.color = '#464646';
        document.querySelector('#air_cond_type').style.color = '#464646';
        t1 = false;
    }

})

let button2 = document.getElementById('button-2');
button2.addEventListener('click', function(){
    if (t2==false) {
        
            document.querySelector('.container-2').style.background = "#E3711E";
            document.querySelector('#led-bulb').style.color = '#FFFFFF';
            document.querySelector('#led-bulb-type').style.color = '#FFFFFF';
            document.querySelector('#bulb-img svg path').style.fill = '#FFFFFF'
        
        t2 = true;
    } else {
        document.querySelector('.container-2').style.background = "#FFFFFF";
        document.querySelector('#led-bulb').style.color = '#464646';
        document.querySelector('#led-bulb-type').style.color = '#464646';
        document.querySelector('#bulb-img svg path').style.fill = '#464646'
        t2 = false;
    }
})

let button3 = document.getElementById('button-3');
button3.addEventListener('click', function(){
    if (t3==false) {
        
            document.querySelector('.container-3').style.background = "#E3711E";
            document.querySelector('#television').style.color = '#FFFFFF';
            document.querySelector('#television-type').style.color = '#FFFFFF';
            document.querySelector('#tv-img svg path').style.fill = '#FFFFFF'
        
        t3 = true;
    } else {
        document.querySelector('.container-3').style.background = "#FFFFFF";
        document.querySelector('#television').style.color = '#464646';
        document.querySelector('#television-type').style.color = '#464646';
        document.querySelector('#tv-img svg path').style.fill = '#464646'
        t3 = false;
    }
    
    
})

let button4 = document.getElementById('button-4');
button4.addEventListener('click', function(){
    if (t4==false) {
        
            document.querySelector('.container-4').style.background = "#E3711E";
            document.querySelector('#speaker').style.color = '#FFFFFF';
            document.querySelector('#speaker-type').style.color = '#FFFFFF';
            document.querySelector('#speaker-img svg path').style.fill = '#FFFFFF'
        
        t4 = true;
    } else {
        document.querySelector('.container-4').style.background = "#FFFFFF";
        document.querySelector('#speaker').style.color = '#464646';
        document.querySelector('#speaker-type').style.color = '#464646';
        document.querySelector('#speaker-img svg path').style.fill = '#464646'
        t4 = false;
    }
})

// fetch('https://webappdemo.casaaltair.com/')
//     .then(response => response.json())
//     .then(data => console.log(data));

// const data = { room: 'living room' };

// fetch('https://webappdemo.casaaltair.com', {
//   method: 'POST',
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('success:', data);
// })
// .catch((error) => {
//   console.error('error:', error);
// });