let globalSound = 1;
let version = 'eagx';
let shownversion = '1.8.8';
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

$('.versel').hide()
$('.moreoptions').hide()

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
}, 200);

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