import{_ as l,o as s,c as r,a as e,b as o,w as n,d as i,e as t,r as d}from"./app.bc0778de.js";const c={},u=e("h1",{id:"soluzione-agli-errori-di-installazione",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#soluzione-agli-errori-di-installazione","aria-hidden":"true"},"#"),i(" Soluzione agli errori di installazione")],-1),h={class:"custom-container tip"},m=e("i",{class:"fas fa-info"},null,-1),_=i("Per prima cosa, leggi attentamente la "),p=i("guida di installazione"),f=i("."),g=t('<h2 id="script-automatico-per-ubuntu" tabindex="-1"><a class="header-anchor" href="#script-automatico-per-ubuntu" aria-hidden="true">#</a> Script automatico per Ubuntu</h2><p>Per chi non volesse seguire i passi dell&#39;installazione su Ubuntu, con <em>systemd</em> c&#39;\xE8 a disposizione uno <a href="https://github.com/joinmisskey/bash-install/blob/main/README.en.md" target="_blank" rel="noopener noreferrer">script automatizzato di installazione</a></p><h2 id="installazione-manuale" tabindex="-1"><a class="header-anchor" href="#installazione-manuale" aria-hidden="true">#</a> Installazione manuale</h2>',3),b=i("Leggi la "),z=i("guida di installazione"),v=e("h2",{id:"la-build-fallisce",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#la-build-fallisce","aria-hidden":"true"},"#"),i(" La build fallisce")],-1),k=e("p",null,"In generale, per creare Misskey sono necessari almeno 2GB di memoria. Assicurati di averne abbastanza sul server, oppure puoi crearlo sul tuo PC e distribuirlo successivamente sul server.",-1),x=e("h2",{id:"qualcosa-va-storto",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#qualcosa-va-storto","aria-hidden":"true"},"#"),i(" Qualcosa va storto")],-1),y=i("Leggi attentamente la "),S=i("guida di installazione"),L=i("."),N=t('<li>Verifica che la versione di NodJS sia la pi\xF9 recente.</li><li>Errori o WARN possono apparire durante l&#39;installazione o la compilazione, ma di solito non sono veri problemi. Per il momento, esegui <code>npm start</code> e controlla l&#39;operazione.</li><li>Verifica l&#39;installazione di <code>node-gyp</code><ul><li>Installa con <code>apt install build-essential</code></li><li>Su Windows, fare riferimento a <a href="https://qiita.com/AkihiroTakamura/items/25ba516f8ec624e66ee7" target="_blank" rel="noopener noreferrer">questo articolo</a> (in giapponese)</li></ul></li>',3),A=i("Se non dovesse funzionare, riprova dall'inizio seguendo i passaggi nella "),C=i("guida di installazione"),V=i("."),q=e("h2",{id:"fallimento-dell-aggiornamento",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fallimento-dell-aggiornamento","aria-hidden":"true"},"#"),i(" Fallimento dell'aggiornamento")],-1),B=e("li",null,[i("Assicurati che abbiano funzionato sia "),e("code",null,"pnpm install"),i(" che "),e("code",null,"pnpm run migrate"),i(" durante l'aggiornamento di Misskey. Se non funzionano, prova con "),e("code",null,"pnpm run clean-all && pnpm install"),i(" e "),e("code",null,"pnpm run build && pnpm run migrate && pnpm start"),i(".")],-1),E=i("Se non sembra funzionare, riprova dall'inizio seguendo i passaggi nella "),M=i("guida di installazione"),P=i("."),R=e("h2",{id:"configurazione-ambiente",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configurazione-ambiente","aria-hidden":"true"},"#"),i(" Configurazione ambiente")],-1),w=i("Leggi attentamente la "),I=i("guida di installazione"),T=i(". Configura le impostazioni in "),U=e("code",null,".config/default.yml",-1),W=i(". Copia "),j=e("a",{href:"https://github.com/misskey-dev/misskey/blob/develop/.config/example.yml",target:"_blank",rel:"noopener noreferrer"},[e("code",null,".config/example.yml")],-1),D=i(" e modifica seguendo le indicazioni che trovi nei commenti."),F=e("p",null,"(Nel formato YAML, qualsiasi linea che inizia con cancelletto (#) viene trattata come un commento.)",-1);function G(J,Q){const a=d("RouterLink");return s(),r("div",null,[u,e("div",h,[m,e("p",null,[_,o(a,{to:"/it/docs/install/manual.html"},{default:n(()=>[p]),_:1}),f])]),g,e("p",null,[b,o(a,{to:"/it/docs/install/manual.html"},{default:n(()=>[z]),_:1})]),v,k,x,e("ul",null,[e("li",null,[y,o(a,{to:"/it/docs/install/manual.html"},{default:n(()=>[S]),_:1}),L]),N,e("li",null,[A,o(a,{to:"/it/docs/install/manual.html"},{default:n(()=>[C]),_:1}),V])]),q,e("ul",null,[B,e("li",null,[E,o(a,{to:"/it/docs/install/manual.html"},{default:n(()=>[M]),_:1}),P])]),R,e("p",null,[w,o(a,{to:"/it/docs/install/manual.html"},{default:n(()=>[I]),_:1}),T,U,W,j,D]),F])}var H=l(c,[["render",G],["__file","troubleshooting.html.vue"]]);export{H as default};
