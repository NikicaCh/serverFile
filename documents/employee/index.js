module.exports = ({ body }) => {
    let statement1 = "Кај именуваниот <strong>НЕ ПОСТОИ</strong> патолошка состојба."
    let statement2 = "Работникот <strong>Е СПОСОБЕН</strong> за занимањето кое го обавува."
    if(body.radio1 == 1 && body.radio2 == 1){
        statement1 = "Кај именуваниот <strong>НЕ ПОСТОИ</strong> патолошка состојба."
        statement2 = "Работникот <strong>Е СПОСОБЕН</strong> за занимањето кое го обавува."
    } else if(body.radio1 == 1 && body.radio2 == 2) {
        statement1 = "Кај именуваниот <strong>ПОСТОИ</strong> патолошка состојба која  НЕ ПРЕТСТАВУВА контраиндикација за работа, односно работни задачи."
        statement2 = "Работникот <strong>Е СПОСОБЕН</strong> за занимањето кое го обавува."
    } else if(body.radio1 == 2 && body.radio2 == 2) {
        statement1 = "Кај именуваниот <strong>ПОСТОИ</strong> патолошка состојба која ПРЕТСТАВУВА контраиндикација за работа, односно работни задачи."
        statement2 = "Работникот <strong>Е СПОСОБЕН СО ОГРАНИЧУВАЊЕ</strong> за занимањето кое го обавува."
    } else if(body.radio1 == 3 && body.radio2 == 2) {
        statement1 = "Кај именуваниот <strong>ПОСТОИ</strong> патолошка состојба."
        statement2 = "Работникот <strong>НЕ Е СПОСОБЕН</strong> за занимањето кое го обавува."
    }

return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
            .document {
                width: auto;
                height: auto;
                padding: 6% 9% 6% 9%;
            }
            .p {
                font-size: 10px 
            }
    
            .title {
                font-size: 13px;
                text-align: center;
                font-widht: 100;
                padding: 15% 5% 2% 5%;
                margin-bottom: 3.5%;
            }
            .title2 {
                font-size: 13px;
                text-align: center;
                font-widht: 100;
                padding: 2% 5% 2% 5%;
                margin-bottom: 2%;
            }
            .centarl {
                text-align: center;
            }
            .top {
                position: absolute;
                top: 5%;
                font-size: 8px;
                line-height: 2px;
                text-align: center;
                margin-bottom: 10%;
            }
            .left {
                width: 60%;
                left: 5%;
            }
            .right {
                width: 30%;
                right: 5%;
            }
            .b-left {
                position: absolute;
                width: 30%;
                left: 10%;
                text-align: center;
            }
            .b-right {
                position: absolute;
                width: 40%;
                right: 0;
                text-align: center;
            }
            .small {
                font-size: 8px;
                line-height: -2px;
            }
            
          </style>
       </head>
       <div id={"hello"} class="document">
            <div class="top left">
                <p class="p">ПОЛИКЛИНИКА ПЗУ Д-р ЃОШЕ</p>
                <p class="small">(овластена здравствена установа за медицина на труд)</p>
                <p class="p">Октомвриска Револуција бр.24 - Куманово, КУМАНОВО</p>
                <p class="small">(адреса)</p>
            </div>
            
            <div class="top right">
                <p class="p">${body.date}</p>
                <p class="small">(датум на прегледот)</p>
                <p class="p">-<p class="p">
                <p class="small">(број на амбулантниот протокол)</p>
                <p class="p">${body.id}</p>
                <p class="small">(број на здравствен картон)</p>
            </div>
            
            <br />
            <br />
            <br />
            <br />
            <br />

            <h1 class="title">ИЗВЕШТАЈ ЗА ПЕРИОДИЧЕН/НАСОЧЕН/СИСТЕМАТСКИ ЗДРАВСТВЕН ПРЕГЛЕД</h1>
            <p class="p">Врз основа на упатот за претходен преглед бр. ______________ од ___________ година</p>
            <p class="p"> Извршен е преглед на <strong>${body.name} ${body.lastName}</strong>
            </p>
            <p class="p"> роден/а <strong>${body.age}</strong> ${(body.education !== undefined) ? `по професија <strong>${body.education}</strong>` : ``} 
            </p>
            <p class="p"> кој/а работи на работно место <strong>${body.position}</strong></p>
            <p class="p"> Врз основа на извршените прегледи во согласност со правилникот на видот, начинот 
                и обемот на здравствени прегледи на вработените ( Службен весник на РМ бр. 171/10 ) се дава
            </p>
            <h1 class="title2">МИСЛЕЊЕ</h1>

            <p class="p"> 1.Патолошки состојби
                (дијагнози)
            </p>
            <p class="p">
                2.Препораки за вработениот
            </p>
            <p class="p">
                3.Препораки за работодавачот и податоци за постоење на професионални болести во врска со работата
            </p>
            <p class="p">
                4.Оценка на работната способност/Наод и МИСЛЕЊЕ.
            </p>
            <p class="p">${statement1}</p>
            <p class="p">${statement2}</p>
                <br />
                <br />
                <p class="p">Забелешка:</p>
                <br />
                <br />
                <br />
            </p>
            <p class="centarl p">(МП)</p>
            <div class="b-left">
                <p class="p">Куманово,  ${body.date}</p>
                <p class="small">(место и датум)</p>
            </div>
            <div class="b-right">
                <p class="p">___________________________<p class="p">
            </div>

        </div>
    </html>
    `;
};