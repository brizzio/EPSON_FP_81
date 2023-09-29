console.log('EPSON FP-81 RT')


//configuration http://xxx.xxx.xxx.xxx/cgi-bin/fpMateConfiguration.xml

let logo = 'data:image/png;base64,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'

let session = 
            {"is_active":true,"carts":[{"active":false,"cart_id":"1698520444067","created_at_date":"2023-09-28","created_at_time":"16:14:04","closed_at_date":"2023-09-28","closed_at_time":"16:17:16","count":3,"total":25.84,"weight":0,"fiscal_code":"","costumer":{},"bags":0,"items":[{"product_id":24,"price_date":"Thu Sep 28 2023 11:14:03 GMT-0300 (Horário Padrão de Brasília)","internal_code":"9170","plu":null,"country":null,"upc":"8000990136015","brand":"Bayernland","product_line":null,"product_name":"Bayernland Emmental Bavarese, Formaggio a Fette 140g","manufacturer":null,"sell_type":2,"detach":"0","department":null,"category_id":2,"category":"formaggi","regular_price":1.85,"promo_type":"0","weight":null,"weight_unit":"Kg","currency":"€","nth_unit":null,"references_id":null,"calculated_price":1.85,"packaging":null,"image":"https://www.paladiniotello.it/ImgProd/d13_D_IMG_0039.jpg","quantity":1,"entry_id":1698520502962,"uid":"e546e2dd-6d9e-4dbc-95e5-b41250f855ae","deleted":false,"added_date":"2023-09-28","added_time":"16:15:02","index":1,"order":"1/1"},{"product_id":74,"price_date":"Thu Sep 28 2023 11:14:03 GMT-0300 (Horário Padrão de Brasília)","internal_code":"17187","plu":null,"country":null,"upc":"8000990136065","brand":"Rizzoli","product_line":"Le Dolci del Mar Cantabrico","product_name":"Filetti di Alici a Bassa Salatura In Olio Bio 80g","manufacturer":null,"sell_type":1,"detach":"0","department":null,"category_id":4,"category":"pesce","regular_price":3.99,"promo_type":"0","weight":null,"weight_unit":"Kg","currency":"€","nth_unit":null,"references_id":null,"calculated_price":3.99,"packaging":null,"image":"https://www.paladiniotello.it/ImgProd/UP_785910_1_8447.jpg","quantity":1,"entry_id":1698520502962,"uid":"de35234a-8c14-4888-9639-be877f8ff31c","deleted":false,"added_date":"2023-09-28","added_time":"16:15:02","index":1,"order":"1/1"},{"product_id":93,"price_date":"Thu Sep 28 2023 11:14:03 GMT-0300 (Horário Padrão de Brasília)","internal_code":"12725","plu":null,"country":null,"upc":"8000990136084","brand":"Capitelli San Giovanni","product_line":"Capitelli San Giovanni","product_name":"Prosciutto Cotto Intero al Kg","manufacturer":null,"sell_type":2,"detach":"0","department":null,"category_id":5,"category":"salumi e proscuitti","regular_price":20,"promo_type":"0","weight":null,"weight_unit":"Kg","currency":"€","nth_unit":null,"references_id":null,"calculated_price":20,"packaging":null,"image":"https://www.paladiniotello.it/ImgProd/d15_IMG_6088.jpg","quantity":1,"entry_id":1698520502962,"uid":"3c86d270-9a82-4a45-98a6-5887006ba118","deleted":false,"added_date":"2023-09-28","added_time":"16:15:02","index":1,"order":"1/1"}],"payment":{"isEditing":true,"dueTotal":25.84,"cashedInTotal":25.84,"pending":0,"list":[{"success":true,"raw":{"id":"354dafeb-178f-43b6-9803-7ff932eb10d9","operator":"VISA","bank":"BANK","account":"151224445","amount":"20.00"},"id":1698520607199,"added_at_date":"2023-09-28","added_at_time":"16:16:47","value":20,"type_id":1,"type":"bancomat","type_name":"carte"},{"id":1698520623627,"added_at_date":"2023-09-28","added_at_time":"16:17:03","value":"5.84","type_id":2,"type":"cash","type_name":"contanti","entries":{"list":[{"type":"bill","face":"10E","value":10,"quantity":1,"img_url":"10€.png","total":10}],"total":10},"change":[{"type":"coin","face":"2E","value":2,"quantity":2,"img_url":"2€.png"},{"type":"coin","face":"10C","value":0.1,"quantity":1,"img_url":"10cent.png"},{"type":"coin","face":"5C","value":0.05,"quantity":1,"img_url":"5cent.png"},{"type":"coin","face":"1C","value":0.01,"quantity":3,"img_url":"1cent.png"}],"option":{"id":2,"type":"cash","url":"cash","title":"contanti","icon":"fas fa-hand-holding-dollar","selected":true,"total":0}}],"isFulfilled":true,"options":[{"id":1,"type":"bancomat","url":"bancomat","title":"carte","icon":"fas fa-credit-card","selected":false,"total":20},{"id":2,"type":"cash","url":"cash","title":"contanti","icon":"fas fa-hand-holding-dollar","selected":true,"total":5.84},{"id":3,"type":"bonus","url":"bonus","title":"bonus","icon":"fas fa-gifts","selected":false,"total":0},{"id":4,"type":"difer","url":"difer","title":"altri","icon":"fas fa-money-check-dollar","selected":false,"total":0}]},"timestamp":"20230928161404","closed_at":"","ticket":{"id":{"data":"fdbc2adb-3010-4e31-9dfe-5412d8cd8fd7","title":"scontrino"},"seq":{"data":1698520636479,"title":"n"},"date":{"data":"2023-09-28","title":"data"},"time":{"data":"16:17:16","title":"ora"},"tenant":{"data":"MAREL SOLUTIONS","title":"ditta"},"retail_banner":{"data":"GOOD BUY","title":"insegna"},"logo":{"data":"/goodBuy.png","title":""},"store_id":{"data":1,"title":"num."},"store_name":{"data":"GOOD BUY Marcianise","title":"neg."},"fiscal_code":{"data":"75979830322","title":"IVA"},"origin_device":{"data":"598cc75a-63fa-4a24-90ef-dd13d0689bf4","title":"CASSA"},"items":[{"upc":"8000990136015","product":"Bayernland Emme...","order":"1/1","weight":0,"weight_unit":"g","currency":"€","price":1.85,"price_type":"R"},{"upc":"8000990136065","product":"Filetti di Alic...","order":"1/1","weight":0,"weight_unit":"g","currency":"€","price":3.99,"price_type":"R"},{"upc":"8000990136084","product":"Prosciutto Cott...","order":"1/1","weight":0,"weight_unit":"g","currency":"€","price":20,"price_type":"R"}],"amount":{"data":"25.84","title":"totale"},"weight":{"data":0,"title":"peso"},"cashed_in_total":{"data":25.84,"title":"importo"},"payment":[{"id":1698520607199,"operator":"VISA","bank":"BANK","account":"151224445","amount":"20.00","type":"debito","mode":"carte","success":true,"left":"1698520607199 - VISA BANK ","right":"Imp.: € 20.00"},{"amount":5.84,"type":"contanti","mode":"contanti","id":1698520623627,"success":true,"left":"1698520623627 - contanti ","right":"Imp.: € 5.84 "}],"invoice":["                      MAREL SOLUTIONS                       ","                                                            ","                    GOOD BUY MARCIANISE                     ","                   2023-09-28 -- 16:17:16                   ","                                                            ","                   DOCUMENTO NON-FISCALE                    "," PRODOTTO                                              EURO ","8000990136015 BAYERNLAND EMME... 0G 1/1             R € 1.85","8000990136065 FILETTI DI ALIC... 0G 1/1             R € 3.99","8000990136084 PROSCIUTTO COTT... 0G 1/1               R € 20","                                                            ","                                               TOTALE: 25.84"]},"purchase_items_count":3}],"sales_amount":0,"taxes_amount":0,"is_closed":false,"is_errored_on_close":false,"error_message":"","session_id":"84bc083a-0f1a-4db5-a67c-328b412a8c07","open_date":"2023-09-28","open_time":"16:13:57","inventory_on_start":[{"type":"bill","face":"500E","value":500,"quantity":10,"img_url":"500€.png"},{"type":"bill","face":"200E","value":200,"quantity":10,"img_url":"200€.png"},{"type":"bill","face":"100E","value":100,"quantity":10,"img_url":"100€.png"},{"type":"bill","face":"50E","value":50,"quantity":10,"img_url":"50€.png"},{"type":"bill","face":"20E","value":20,"quantity":10,"img_url":"20€.png"},{"type":"bill","face":"10E","value":10,"quantity":10,"img_url":"10€.png"},{"type":"bill","face":"5E","value":5,"quantity":10,"img_url":"5€.png"},{"type":"coin","face":"2E","value":2,"quantity":10,"img_url":"2€.png"},{"type":"coin","face":"1E","value":1,"quantity":10,"img_url":"1€.png"},{"type":"coin","face":"50C","value":0.5,"quantity":10,"img_url":"50cent.png"},{"type":"coin","face":"20C","value":0.2,"quantity":10,"img_url":"20cent.png"},{"type":"coin","face":"10C","value":0.1,"quantity":10,"img_url":"10cent.png"},{"type":"coin","face":"5C","value":0.05,"quantity":10,"img_url":"5cent.png"},{"type":"coin","face":"2C","value":0.2,"quantity":10,"img_url":"2cent.png"},{"type":"coin","face":"1C","value":0.01,"quantity":10,"img_url":"1cent.png"}],"did":"598cc75a-63fa-4a24-90ef-dd13d0689bf4","currency":"€","company":"MAREL","company_corporate_name":"MAREL SOLUTIONS","company_id":1,"company_address":{"name":"SEDE LEGALE","street":"Via Saverio Merola, 45","number":"38","postal_code":"81025","city":"Marcianise","county":"CE","country":"Italia","country_iso":"it-IT","lat":41.03721613797493,"lng":14.289456125138692},"company_retail_banner":"GOOD BUY","company_retail_banner_logo_url":"/goodBuy.png","company_store_name":"GOOD BUY Marcianise","company_store_id":1,"company_store_fiscal_code":"75979830322","company_store_lat":41.02634479153504,"company_store_lng":14.302735769952927,"company_country_iso":"it-IT","company_country_name":"Italia","operator_id":1,"operator_name":"Antimo Gionti","operator_alias":"Antimo","operator_role":"CASSIERE","operator_is_admin":false,"operator_is_super":true,"logged_user":{"uuid":1,"tenant_id":1,"name":"Antimo Gionti","alias":"Antimo","email":"antimo@gmail.com","isAdmin":false,"isSuper":true,"isCashier":false,"tenant_role":"Amministratore Delegato","isLeftHanded":false,"login_id":1698520416454,"login_date":"2023-09-28","login_time":"16:13:36","logout_date":"","logout_time":""}}


const randomicElementsFromArray = (a, n) => new Array(n).fill(null).map(() => a[Math.floor(Math.random() * a.length)]);
        
           

var response = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
      <ns2:getNotificationsResponse xmlns:ns2="---url---">
         <return>
            <notifications>
               <ackRequired>false</ackRequired>
               <body>Testing Notitfications</body>
               <created>1498798404874</created>
               <gpsAlt>1.0</gpsAlt>
               <gpsLat>1.0</gpsLat>
               <gpsLong>1.0</gpsLong>
               <messageId>253</messageId>
               <priority>INFORMATIONAL</priority>
               <senderClientId>PMC0</senderClientId>
               <status>SENT</status>
               <subject>Test Notification</subject>
               <updated>1498798404874</updated>
               <userId>1</userId>
               <userLogin>ipics</userLogin>
            </notifications>
            <notifications>
               <ackRequired>false</ackRequired>
               <body>Test notitfication</body>
               <created>1498797535714</created>
               <gpsAlt>0.0</gpsAlt>
               <gpsLat>0.0</gpsLat>
               <gpsLong>0.0</gpsLong>
               <messageId>244</messageId>
               <priority>HIGH</priority>
               <senderClientId>PMC_1234</senderClientId>
               <status>SENT</status>
               <subject>Test</subject>
               <updated>1498797535714</updated>
               <userId>1</userId>
               <userLogin>ipics</userLogin>
            </notifications>
            <notifications>
               <ackRequired>false</ackRequired>
               <body>Testing Notitfications</body>
               <created>1498794764538</created>
               <gpsAlt>1.0</gpsAlt>
               <gpsLat>1.0</gpsLat>
               <gpsLong>1.0</gpsLong>
               <messageId>239</messageId>
               <priority>INFORMATIONAL</priority>
               <senderClientId>PMC0</senderClientId>
               <status>SENT</status>
               <subject>Test Notification</subject>
               <updated>1498794764538</updated>
               <userId>1</userId>
               <userLogin>ipics</userLogin>
            </notifications>
            <notifications>
               <ackRequired>false</ackRequired>
               <body>Testing Notitfications</body>
               <created>1498794760123</created>
               <gpsAlt>1.0</gpsAlt>
               <gpsLat>1.0</gpsLat>
               <gpsLong>1.0</gpsLong>
               <messageId>234</messageId>
               <priority>INFORMATIONAL</priority>
               <senderClientId>PMC0</senderClientId>
               <status>SENT</status>
               <subject>Test Notification</subject>
               <updated>1498794760123</updated>
               <userId>1</userId>
               <userLogin>ipics</userLogin>
            </notifications>
         </return>
      </ns2:getNotificationsResponse>
   </soap:Body>
</soap:Envelope>`;



var soapRequest = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
      
   </soap:Body>
</soap:Envelope>`;


const encodeSoap = (command)=>{
    return `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
                ${command}
            </soap:Body>
            </soap:Envelope>`;
}

var staticIp = document.getElementById('ip').value || '192.168.001.110'

/* const parseSoapResponse = () => {

    var doc = new DOMParser().parseFromString(response, 'text/xml');
        var valueXML = doc.getElementsByTagName('return');
        var temps = valueXML[0].children;
        var nortifications=[];
        for (var i = 0; i < temps.length; i++) {
            var temp = temps[i].children;
            var obj = {};
            for (var j = 0; j < temp.length; j++) {
            var property = temp[j];

            obj[property.localName] = property.innerHTML;
        }
        console.log(JSON.stringify(obj));
        nortifications.push(obj);
        }
} */


const parseSoapResponse = (response) => {

    return new DOMParser().parseFromString(response, 'text/xml');
        
}






document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('ip')

   console.log(input)
    input.placeholder= staticIp
})


const config = ()=> window.location.href = `http://${staticIp}/cgi-bin/fpMateConfiguration.xml`


const sendToPrinter = ()=>{
    console.log('priiiinnnttttttt')
    let ip = document.getElementById('ip').value || staticIp
    console.log('ip input value> ', ip)
    let xml = document.getElementById('xml').value || ''
    console.log('xml input value> ', xml)

    let soapBodyRequest = encodeSoap(xml)

    console.log('soap> ', soapBodyRequest)

    let url = `http://${ip}/cgi-bin/fpmate.cgi`

    fetch(url, {
            body: soapBodyRequest,
            method: 'POST',
            headers: {
                'Content-Type': 'application/soap+xml',
            },
        })
            .then(response => {
                console.log(response)
                let div = document.getElementById('show')
                div.innerHTML= JSON.stringify(response)
            })
            .catch(function(error) {
                console.log(error);
            });
        //.done();
    

}

const printXml = (xml)=>{
    
    let url = `http://${staticIp}/cgi-bin/fpmate.cgi`

    console.log('soap body> ', xml)

    return new Promise((resolve, reject) => {
        
        var epos = new epson.fiscalPrint(); 
    
        epos.onreceive = function (res, tag_list_names, add_info) { 
           //Place any code here to manage the responses.
           let objectResponse = {}
           console.log('printXml', res, tag_list_names, add_info)
           objectResponse.response = res
           objectResponse.tags= tag_list_names
           objectResponse.info=add_info
           resolve(objectResponse)
           } // end onReceive 
           //Place the onerror code after: 
            epos.onerror = function (e) { 
           //Place any code here to manage errors. XMLHTTP request timeouts fire this event as well as  HTTP errors. Printer errors on the other hand use onreceive. 
           reject(e)
           } // end onError 
           //Now we can send the request: 
           epos.send(url,  xml, timeout=10000); 
           //or with query string: 
           //epos.send(window.location.protocol + "//" + window.location.hostname + "/cgi-bin/fpmate.cgi" + "?devid=cucina&timeout=10000", data_to_send, timeout);

        });

}




function JSONtoXML(obj) {
    let xml = '';
    for (let prop in obj) {
      xml += obj[prop] instanceof Array ? '' : '<' + prop + '>';
      if (obj[prop] instanceof Array) {
        for (let array in obj[prop]) {
          xml += '\n<' + prop + '>\n';
          xml += JSONtoXML(new Object(obj[prop][array]));
          xml += '</' + prop + '>';
        }
      } else if (typeof obj[prop] == 'object') {
        xml += JSONtoXML(new Object(obj[prop]));
      } else {
        xml += obj[prop];
      }
      xml += obj[prop] instanceof Array ? '' : '</' + prop + '>\n';
    }
    xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml;
  }
  



const printerStatus = async ()=>{

    let cmd = `
    <printerCommand>
    <queryPrinterStatus operator="1" statusType="1" />
    </printerCommand>
    
    `
    
    let res = await printXml(cmd)

    console.log('status ok? ',res);
   
    return !!res.ok
    

}



const venditaArticolo = async ()=>{

    let cmd = `
    <printerFiscalReceipt>
    <clearText operator="" />
    <printRecMessage operator="" messageType="1" message="MESSAGGIO SPECIALE" /> 

    <beginFiscalReceipt operator="1" />
    <printRecItem operator="51" description="PANINO" quantity="1" unitPrice="1,00" department="1" justification="1" />
    <printRecItem operator="51" description="PANINO" quantity="4" unitPrice="1,00" department="1" justification="1" />
    <printRecItem operator="1" description="PANINO" quantity="1" unitPrice="1,00" department="1" justification="1" />
    <printBarCode operator="1" position="901" width="2" height="66" hRIPosition="3" hRIFont="A" codeType="CODE39" code="01234567ABCDEF" />
    <printRecSubtotal operator="" option="0" />
    <printRecTotal  description="CONTANTI" payment="2,00" paymentType="0" index="1" justification="2" />
    <printRecTotal  description="VISA" payment="4,00" paymentType="2" index="2" justification="2" /> 

    <displayText operator="1" data="GRAZIE E ARRIVEDERCI" />
    <endFiscalReceipt operator="1" />
    </printerFiscalReceipt>
    
    `
    

    let res = await printXml(cmd)

    console.log('vendita articolo ',res);
   
    return res
    

}


/* const printerStatus = async ()=>{

    let cmd = `
    <printerCommand>
    <queryPrinterStatus operator="1" statusType="1" />
    </printerCommand>
    
    `
    
   
    let command = {
        "printerCommand": {
          "queryPrinterStatus": ""
        }
      }

    let xml = JSONtoXML(command)
    
    console.log(xml);
    
    let res = await printXml(xml)

    console.log('status ok? ',res.ok);
   
    return !!res.ok
    

} */


const test = () =>{

var data_to_send = '<printerCommand>\n' + 
 '\t<queryPrinterStatus operator="1" />\n' + 
 '</printerCommand>\n'; 

 var epos = new epson.fiscalPrint(); 

 let url = `http://${staticIp}/cgi-bin/fpmate.cgi`


 epos.onreceive = function (res, tag_list_names, add_info) { 
    //Place any code here to manage the responses. 
    console.log('test', res, tag_list_names, add_info)
    let div = document.getElementById('show')
    div.innerHTML= `Response: ${JSON.stringify(res)} Tags: ${JSON.stringify(tag_list_names)} Info: ${JSON.stringify(add_info)}    `

    } // end onReceive 
    //Place the onerror code after: 
     epos.onerror = function () { 
    //Place any code here to manage errors. XMLHTTP request timeouts fire this event as well as  HTTP errors. Printer errors on the other hand use onreceive. 
    } // end onError 
    //Now we can send the request: 
    epos.send(url,  data_to_send, timeout=10000); 
    //or with query string: 
    //epos.send(window.location.protocol + "//" + window.location.hostname + "/cgi-bin/fpmate.cgi" + "?devid=cucina&timeout=10000", data_to_send, timeout);
    

}


const sellOne = async() =>{

    
    let cmd = `
    <printerFiscalReceipt>
    <clearText operator="" />
    <printRecMessage operator="" messageType="1" message="MESSAGGIO SPECIALE" /> 

    <beginFiscalReceipt operator="1" />
    <printRecItem operator="51" description="PANINO" quantity="1" unitPrice="1,00" department="1" justification="1" />
    <printRecItem operator="51" description="PANINO" quantity="4" unitPrice="1,00" department="1" justification="1" />
    <printRecItem operator="1" description="PANINO" quantity="1" unitPrice="1,00" department="1" justification="1" />
    <printBarCode operator="1" position="901" width="2" height="66" hRIPosition="3" hRIFont="A" codeType="CODE39" code="01234567ABCDEF" />
    <printRecSubtotal operator="" option="0" />
    <printRecTotal  description="CONTANTI" payment="2,00" paymentType="0" index="1" justification="2" />
    <printRecTotal  description="VISA" payment="4,00" paymentType="2" index="2" justification="2" /> 

    <displayText operator="1" data="GRAZIE E ARRIVEDERCI" />
    <endFiscalReceipt operator="1" />
    </printerFiscalReceipt>
    
    `
    
     let result = await printXml(cmd)
    
     console.log(result)

     logout(result)
        
    
    }


    const logout = (r) => {
        console.log('logout', r)
        let div = document.getElementById('show')
        div.innerHTML= `Response: ${JSON.stringify(r.response)} Tags: ${JSON.stringify(r.tags)} Info: ${JSON.stringify(r.info)}    `
    
    }


    const generateProductListXML = (data)=>{

        return data.reduce((a,c,i)=>{
            let str = `
            <printRecItem operator="51" description="${c.upc} ${c.product_name}" quantity="${Number(c.quantity)}" unitPrice="${Number(c.regular_price)}" department="1" justification="1" />
            `
            let xml = a.xml?a.xml:''
            let tot = a.total?a.total:0

            console.log(Number(c.regular_price))
            return {xml: xml + str, total: tot + Number(c.regular_price)}
        },{})

    }

    const generatePaymentsXML = (data)=>{

        //<printRecTotal  description="CONTANTI" payment="2,00" paymentType="0" index="1" justification="2" />
        return data.reduce((a,c,i)=>{
            let details={}

            switch (Number(c.type_id)) {
                case 1: //bancomat
                    details.paymentType=2
                    details.description=`BANCOMAT ${c.raw?c.raw.operator:''}` 
                    details.payment= c.raw.amount
                    break;
            
                
                case 2: //cash
                    details.paymentType=0
                    details.description=`CONTANTI`
                    details.payment=c.value
                    break;
            }
            let str = `
                <printRecTotal  description="${details.description}" payment="${details.payment}" paymentType="${details.paymentType}" index="1" justification="2" />`
            
            return a + str
        },'')

    }

    const makeTicket = async()=>{

        
        let currentCart= session.carts[0]

        console.log('session',session)
        console.log('currentCart',currentCart)

        //let products = await readJSONFile('products.json')
        //const randomic = (a, n) => new Array(n).fill(null).map(() => a[Math.floor(Math.random() * a.length)]);
        
        //let items = randomic(products, 5)

        document.getElementById('xml').innerHTML=JSON.stringify(currentCart)
        
        console.log(currentCart.items)

        //<printRecItem operator="51" description="PANINO" quantity="1" unitPrice="1,00" department="1" justification="1" />

        let info = generateProductListXML(currentCart.items)
        let paymentsList = generatePaymentsXML(currentCart.payment.list)

        console.log(info.xml)

        let cmd = `
        
        <printerFiscalReceipt>
        <printRecMessage  operator="1" messageType="1" index="2" font="4" message="${session.company_retail_banner}" /> 
        <printRecMessage  operator="1" messageType="1" index="1" font="3" message="${session.company_store_name}" />
        <printRecMessage  operator="1" messageType="1" index="2" font="2" message="P.I.V.A ${session.company_store_fiscal_code}" />
        <clearText operator="" />
        <printRecMessage operator="" messageType="1" index="3" message="MESSAGGIO SPECIALE" /> 

        <beginFiscalReceipt operator="1" />
        ${info.xml}
        ${paymentsList}
        <displayText operator="1" data="GRAZIE E ARRIVEDERCI" />
        <endFiscalReceipt operator="1" />
        </printerFiscalReceipt>
    
    `

    console.log(cmd)

    let result = await printXml(cmd)
    
     console.log(result)

     logout(result)



    }


    const readJSONFile = (name)=>{


        return new Promise((resolve, reject) => {
            
            fetch(name)
            .then(function (response) {
                resolve(response.json());
            })
            .catch(function (err) {
                reject(err);
            });
        })



    }


    