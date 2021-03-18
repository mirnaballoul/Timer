function start(){
     inter = setInterval(changetime,10);
}
function changetime(){
    console.log('hi');
    var h1,m1,s1;
    h1=parseInt(document.getElementById("hours").innerText);
    m1=parseInt(document.getElementById("minutes").innerText);
    s1=parseInt(document.getElementById("seconds").innerText);
    s1++;
    if(s1==60){
        s1=0;
        m1++;
    }else if(m1==60){
        m1=0;
        h1++;
        
    }
    document.getElementById("minutes").innerText =m1;
    document.getElementById("hours").innerText =h1;
    document.getElementById("seconds").innerText = s1;
}
function stop(){
    clearInterval(inter);
}
function reset(){
    document.getElementById("hours").innerText='0';
    document.getElementById("minutes").innerText='0';
    document.getElementById("seconds").innerText='0';
}
function pause(){
    let li = document.createElement('li');
    h=parseInt(document.getElementById("hours").innerText);
    m=parseInt(document.getElementById("minutes").innerText);
    s=parseInt(document.getElementById("seconds").innerText);
    li.innerText = h + ':' + m + ':' + s;
    li.setAttribute('style', 'border: 1px solid #000; width:20rem; background-color:#fff; opacity:0.4; list-style-type:none; text-align:center; height:35px;padding:15px');
    
    let ul = document.getElementById('lap');
    ul.setAttribute('style', 'dicoration:none');
    ul.appendChild(li);
}