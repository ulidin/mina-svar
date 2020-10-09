/*

Skriv en funktion som tar en sträng som parameter, gör om alla tecken som inte är a-z 
(stora eller små) till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot "säkra". De tecken ni behöver byta ut är:
<
>
å
ä
ö
'

Alla tecken som inte är a-z eller någon av ovanstående 
(t ex kommatecken, punkter, bindestreck osv) ska tas bort.

*/


function safe_string(str) {

    return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/å/g, '&aring;').replace(/å/g, '&Aring;').replace(/ä/g, '&auml;').replace(/ä/g, '&Auml;').replace(/ö/g, '&ouml;').replace(/ö/g, '&Ouml;').replace(/'/g, '&apos;').replace(/,/g, '');

}
console.log(safe_string("<h1>Sjörövare, O'hoj</h1>")); // Expected output: &lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;