let globalSound = 1;
let version = 'eagx';
let shownversion = '1.8.8';
let loginstatus = 0;
const animatemeuwu = [
    '.bottom',
    '.bottom-background',
    '#currentver',
    'button',
    'p',
    '.moreoptions',
    '.flow',
    '.mccl',
    '.promo'
];
$('#playbutton').hide();

$('.versel').hide()
$('.moreoptions').hide()
picksplash();

$('button').on('click', () => {
    if (globalSound==1 ) {
        var audio = new Audio('assets/clickysound2.ogg');
        audio.play();
    }
})

function verSel(a) {
    $('.versel').show();
    if (a=='close') {
        $('.versel').hide();
    }
}

setInterval(function () {
    $('#currentver').text('current version: '+shownversion);
    if (globalSound==1) {
        $('#audio').css('color', '#00ff00');
    } else {
        $('#audio').css('color', '#ff0000');
    }
    loginstatus = localStorage.getItem('skibidiloginstatus');
}, 200);

setTimeout(function () {
    $('#playbutton').show();

    loginHandler()
}, 300)

function setver(ver, sver) {
    version = ver;
    shownversion = sver;
    verSel('close');
}

function moreoptions() {
    $('.moreoptions').show();
}

function closemoreoptions() {
    $('.moreoptions').hide();
}

function superlsd() {
    for ( i=0; i<animatemeuwu.length; i++) {
        $(animatemeuwu[i]).css('animation', '10s infinite superlsd linear');
    }
    var audio = new Audio('assets/pornstarsong.mp3');
    audio.play();
    $('.superlsdgif').show();
}

$('#audio').on('click', function () {
    globalSound = 1 - globalSound
})

function playthegame() {
    console.log('eagerz/'+version+'.html')
    window.location.assign('eagerz/'+version+'.html') 
}


function picksplash() {
    let r = Math.floor(Math.random()*splashes.length);
    $('.splash').text(splashes[r]);
}


function loginHandler() {
    if(!localStorage.getItem('skibidiloginstatus')){
        localStorage.setItem('skibidiloginstatus', 0);
        location.reload();
    }
    let sls = localStorage.getItem('skibidiloginstatus');
    if (sls== 0 ){
        $('#playbutton').hide();
        $('.userinfo').text('you need to log in!')
        $('.userinfo').append('<br><br><button onclick="login(0)">Log IN/sign up</button>');
    }
}

$('.logincontainer').hide();

function login(a) {
    if (a==0) {
$('.logincontainer').show();

    } else if (a==-1) {
$('.logincontainer').hide();

    } else if (a==1) {
        if ( $('#username').val() == localStorage.getItem('skibidiusername') ) {
            if ( $('#password').val() == localStorage.getItem('skibidipassword') ) {
                loginstatus=1;
                $('.logincontainer').hide();
                $('#playbutton').show();
            } else {
                alert('wrong info!');
                location.reload();
            }
        } else {
            alert('wrong info!');
            location.reload();
        }
    } else if (a==2) {
        if (localStorage.getItem('skibidiusername')) {
            alert('must delete old account first');
        }
        if (localStorage.getItem('skibidipassword')) {
            alert('must delete old account first');
        }

        
    }
}