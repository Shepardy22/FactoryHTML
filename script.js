// #############################Inicio##################################

let html = '-HTML PROJETO-';
let css = `-CSS PROJETO-`;
let js = `-JS PROJETO-`

const pedido = [html, css, js]


let projetoFinalizado = ``

let pedidoHTML_ok =''
let pedidoCSS_ok =''
let pedidoJS_ok =''


let javascriptOK
let cssOK
let htmlOK

encarregadoGeral(pedido);




function encarregadoGeral (pedido){
    pedidoRecebido = pedido;

    htmlText = pedidoRecebido[0];
    cssText = pedidoRecebido[1];
    jsText = pedidoRecebido[2];

    
        console.log('##Encarregado Geral Analisou e separou pedido para o Supervisor...');
        supervisor (htmlText, cssText, jsText);

       
        
                
        

}


function supervisor (HTMLTEXT, CSSTEXT, JSTEXT){
    htmlRecebido = `**HTML Validado pelo Supervisor: ${HTMLTEXT}**`;
    cssRecebido = `**CSS Validado pelo Supervisor: ${CSSTEXT}**`;
    jsRecebido = `**JS Validado pelo Supervisor: ${JSTEXT}**`;

    
    
    console.log('### Supervisor Recebeu documentos e encaminhou para equipe...');
        joaoFront_and (htmlRecebido);
        mariaDesiner(cssRecebido);
        pedroBack_and (jsRecebido);
    
}


function joaoFront_and (docHTML){

    pedidoHTML = `#### JoaoFront_and:

         +++${docHTML}+++

         Segue o projeto:
            <body>
                <section>
                    <div>
                        <p> Texto escrito </p>
                    </div>
                </section>
            </body>
                `;
    console.log('*HTML pronto!')
    pedidoHTML_ok = 'ok';
    htmlOK = pedidoHTML;
} 

function mariaDesiner (docCSS){
    pedidoCSS= `#### MariaDesigner:

        ///${docCSS}///

        Estilização:
        Backgroung_color: blue,
        margin: 15px,
        padding: 15px auto,
        `
    console.log('*CSS pronto!');
    pedidoCSS_ok = 'ok';
    cssOK = pedidoCSS;
} 

function pedroBack_and (docJS){

    pedidoJS = `#### PedroBack_and:

    §§§${docJS}§§§
    
    Script:
    function abc(){
        let variavel1 = parametroXYZ;
        return variavel1 + ok;
    }
        `
    console.log('*js Pronto!');
    pedidoJS_ok = 'ok';
    javascript = pedidoJS

}  



if( pedidoCSS_ok === 'ok' && pedidoHTML_ok === 'ok'&& pedidoJS_ok === 'ok' ){
    revisor(javascript, cssOK, htmlOK);
}else {
    console.log('aguardando');
}

function revisor(j, c, h) {

    projetoFinalizado = `Revisado:
    [OK] ${h} 
       
    [OK] ${c} 
       
    [OK] ${j} 
       
       Projeto Pronto!!!!! `
    

       console.log(projetoFinalizado)  
}