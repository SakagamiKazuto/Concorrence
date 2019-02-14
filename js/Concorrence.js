let base_url = "https://jtti.jp";

//　以下の値を配列の値として、url_second_valuesに格納してもらえれば、滋賀教室以外のすべてのサイトが同時に開きます。
// 'katura','hondan','oshare-hiroba','komachi','kirara','wakei','sakurawasou','rakurakuwasou','iroha','waonwasou','kinuyoshi','yuri','fukufuku','kadoya','wayu','yuuwasou','wabisabi','tsutaya','karin','ryuzen','nanairo','karakusa','hanamusubi','kanobisou','karakusa','warakuwasou','ichiraku','morikyu'
let url_second_values = [];
//'school','news','faq','privacypolicy','law'
let url_third_values = [];

let open_url;
let w;
window.onload = function() {
    for( let n=0; n < url_second_values.length; n++ ) {
        open_url = base_url + "/" + url_second_values[n];
        
        for( let i=0; i < url_third_values.length; i++) {
       w = window.open(open_url + '/' + url_third_values[i], "_blank");
        }
    }
}