function open_windows() {
    // https://jtti.jp
let base_url = document.getElementById("base_url").value;

//　以下の値を配列の値として、url_second_valuesに格納してもらえれば、滋賀教室以外のすべてのサイトが同時に開きます。
// 'katura','hondan','oshare-hiroba','komachi','kirara','wakei','sakurawasou','rakurakuwasou','iroha','waonwasou','kinuyoshi','yuri','fukufuku','kadoya','wayu','yuuwasou','wabisabi','tsutaya','karin','ryuzen','nanairo','karakusa','hanamusubi','kanobisou','karakusa','warakuwasou','ichiraku','morikyu'
let url_second_values = new Array();
//'school','news','faq','privacypolicy','law'
let url_third_values = new Array();

let open_url;
let excecute_open;

// 1.まずは値をもらってきた値から配列に格納していかなきゃ
for(let i=0; i<2; i++){
    url_second_values.push(document.getElementById("s-" + i).value);    
}
for(let i=0; i<2; i++){
    url_third_values.push(document.getElementById("th-" + i).value);
    console.log(url_third_values[i]);
}

    for( let n=0; n < url_second_values.length; n++ ) {
        open_url = base_url + "/" + url_second_values[n];
        
        for( let i=0; i < url_third_values.length; i++) {
       w = window.open(open_url + '/' + url_third_values[i], "_blank");
        }
    }

// window.onload = function() {
//     for( let n=0; n < url_second_values.length; n++ ) {
//         open_url = base_url + "/" + url_second_values[n];
        
//         for( let i=0; i < url_third_values.length; i++) {
//        w = window.open(open_url + '/' + url_third_values[i], "_blank");
//         }
//     }
// }
}

// 値の挿入一行にまとめたいので関数作ってます。
// function make_url_array() {
//     let url_value_array = new Array(String id);
//     let count = (url_second_values url_values).length;
//     for(let i=0; i<count; i++)
//     {
//         url_value_array.push();
//     }    
// }