translator = window.translator || {};
translator = function () {

//********** LANGUAGE HASHES   ***************** -->
var hinToengWord = new Array(); //  with a and without Bi-labial words array
var hinToengWordfordot = new Array(); //  with a and without Bi-labial words array
var hinToengWord1 = new Array(); // without a and without Bi-labial words array, with -n
var hinToengWord2 = new Array(); // without a and Bi-labial words array, with -m
hinToengWordfordot = {'ऩ':'n',':' : ':','।':'।','ड़': 'ḍ','फ़':'ph' ,'ऱ':'r','ज़':'j','ग़':'g','ख़':'kh','क़':'k','ढ़':'dhh','फ़': 'ph', 'ड़': 'ḍ', 'ऎ': 'e', 'ख़': 'kh', 'ढ़': 'dhh', 'ि्व': 'vi', 'ज़': 'j', 'फ़': 'ph', 'ढ़': 'dhh', 'ग़': 'g', 'क़': 'k', 'ख़': 'kh', 'ँ': 'n', 'फ़': 'ph', 'श्ा': 'sh', 'ट्र': 'ṭr', 'भ्र': 'bhr', 'ग्र': 'gr', 'दृ': 'dra', 'प्र': 'pr', 'अं': 'an', 'ष्ट्र': 'shhṭra', 'क्ष': 'kshh', 'ऑ': 'o', 'आ': 'ạa', 'त्र': 'tr', 'ॉ': 'o', 'ं': 'n', 'ः': ':', 'अ': 'ạ', 'आ': 'ạa', 'अ:': 'ah', 'इ': 'i', 'ई': 'i', 'उ': 'u', 'ऊ': 'u', 'ऋ': 'ru', 'ज़': 'j', 'ड़': 'ḍ', 'ऌ': 'lru', 'ए': 'e', 'ऐ': 'e', 'ओ': 'o', 'औ': 'aụ', 'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ḍ', 'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ज्ञ': 'ghy', 'ट': 'ṭ', 'ठ': 'thh', 'ड': 'ḍ', 'ढ': 'dhh', 'ड़': 'ḍ', 'ण': 'ṅ', 'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n', 'प': 'p', 'ब': 'b', 'भ': 'bh', 'म': 'm', 'य': 'y', 'र': 'r', 'ऱ': 'r', 'ल': 'l', 'ळ': 'L', 'व': 'v', 'श': 'sh', 'ष': 'shh', 'स': 's', 'ह': 'h', 'फ': 'ph', 'ज': 'j', 'ा': 'a', 'ि': 'i', 'ी': 'i', 'ु': 'u', 'ू': 'u', 'ृ': 'ru', 'ॄ': 'ru', 'े': 'e', 'ै': 'ại', 'ो': 'o', 'ौ': 'aụ', 'ॐ': 'om', '.': '.', ',': ',', '?': '?', '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '०': '०', '१': '१', '२': '२', '३': '३', '४': '४', '५': '५', '६': '६', '७': '७', '८': '८', '९': '९', ';': ';', '-': '-', '\\': '\\', '<': '<', '>': '>', '/': '/', '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')', '_': '_', '+': '+', '|': '|', '"': '"', "'": "'"}
hinToengWord = {'ऩ':'na',':' : ':','।':'।','ड़': 'ḍa','फ़':'pha' ,'ऱ':'ra','ज़':'ja','ग़':'ga','ख़':'kha','क़':'ka','ढ़':'dhha','फ़': 'pha', 'ड़': 'ḍa', 'ऎ': 'e', 'ख़': 'kha', 'ढ़': 'dhha', 'ि्व': 'vi', 'ज़': 'ja', 'फ़': 'pha', 'ढ़': 'dhha', 'ग़': 'ga', 'क़': 'ka', 'ख़': 'kha', 'ँ': 'n', 'फ़': 'pha', 'श्ा': 'sha', 'ट्र': 'ṭra', 'भ्र': 'bhra', 'ग्र': 'gra', 'दृ': 'dra', 'प्र': 'pra', 'अं': 'an', 'ष्ट्र': 'shhṭra', 'क्ष': 'kshha', 'ऑ': 'o', 'आ': 'ạa', 'त्र': 'tr', 'ॉ': 'o', 'ं': 'n', 'ः': ':', 'अ': 'ạ', 'आ': 'ạa', 'अ:': 'ah', 'इ': 'i', 'ई': 'i', 'उ': 'u', 'ऊ': 'u', 'ऋ': 'ru', 'ज़': 'ja', 'ड़': 'ḍa', 'ऌ': 'lru', 'ए': 'e', 'ऐ': 'e', 'ओ': 'o', 'औ': 'aụ', 'क': 'ka', 'ख': 'kha', 'ग': 'ga', 'घ': 'gha', 'ङ': 'ḍa', 'च': 'cha', 'छ': 'chha', 'ज': 'ja', 'झ': 'jha', 'ज्ञ': 'ghy', 'ट': 'ṭa', 'ठ': 'thha', 'ड़': 'ḍa', 'ड': 'ḍa', 'ढ': 'dhha', 'ण': 'ṅa', 'त': 'ta', 'थ': 'tha', 'द': 'da', 'ध': 'dha', 'न': 'na', 'प': 'pa', 'ब': 'ba', 'भ': 'bha', 'म': 'ma', 'य': 'ya', 'र': 'ra', 'ऱ': 'ra', 'ल': 'la', 'ळ': 'L', 'व': 'va', 'श': 'sha', 'ष': 'shha', 'स': 'sa', 'ह': 'ha', 'फ': 'pha', 'ज': 'ja', 'ा': 'a', 'ि': 'i', 'ी': 'i', 'ु': 'u', 'ू': 'u', 'ृ': 'ru', 'ॄ': 'ru', 'े': 'e', 'ै': 'ại', 'ो': 'o', 'ौ': 'aụ', 'ॐ': 'om', '.': '.', ',': ',', '?': '?', '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '०': '०', '१': '१', '२': '२', '३': '३', '४': '४', '५': '५', '६': '६', '७': '७', '८': '८', '९': '९', ';': ';', '-': '-', '\\': '\\', '<': '<', '>': '>', '/': '/', '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')', '_': '_', '+': '+', '|': '|', '"': '"', "'": "'"}
hinToengWord1 = {'ऩ':'n',':' : ':','।':'।','ड़': 'ḍ','फ़':'ph' ,'ऱ':'r','ज़':'j','ग़':'g','ख़':'kh','क़':'k','ढ़':'dhh','फ़': 'ph', 'ड़': 'ḍ', 'ऎ': 'e', 'ख़': 'kh', 'ढ़': 'dhh', 'ि्व': 'vi', 'ज़': 'j', 'फ़': 'ph', 'ढ़': 'dhh', 'ग़': 'g', 'क़': 'k', 'ख़': 'kh', 'ँ': 'n', 'फ़': 'ph', 'श्ा': 'sh', 'ट्र': 'ṭr', 'भ्र': 'bhr', 'ग्र': 'gr', 'दृ': 'dra', 'प्र': 'pr', 'अं': 'an', 'ष्ट्र': 'shhṭra', 'क्ष': 'kshh', 'ऑ': 'o', 'आ': 'ạa', 'त्र': 'tr', 'ॉ': 'o', 'ं': 'n', 'ः': ':', 'अ': 'ạ', 'आ': 'ạa', 'अ:': 'ah', 'इ': 'i', 'ई': 'i', 'उ': 'u', 'ऊ': 'u', 'ऋ': 'ru', 'ज़': 'j', 'ड़': 'ḍ', 'ऌ': 'lru', 'ए': 'e', 'ऐ': 'e', 'ओ': 'o', 'औ': 'aụ', 'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ḍa', 'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ज्ञ': 'ghy', 'ट': 'ṭ', 'ठ': 'thh', 'ड': 'ḍ', 'ढ': 'dhh', 'ड़': 'ḍ', 'ण': 'ṅ', 'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n', 'प': 'p', 'ब': 'b', 'भ': 'bh', 'म': 'm', 'य': 'y', 'र': 'r', 'ऱ': 'r', 'ल': 'l', 'ळ': 'L', 'व': 'v', 'श': 'sh', 'ष': 'shh', 'स': 's', 'ह': 'h', 'फ': 'ph', 'ज': 'j', 'ा': 'a', 'ि': 'i', 'ी': 'i', 'ु': 'u', 'ू': 'u', 'ृ': 'ru', 'ॄ': 'ru', 'े': 'e', 'ै': 'ại', 'ो': 'o', 'ौ': 'aụ', 'ॐ': 'om', '.': '.', ',': ',', '?': '?', '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '०': '०', '१': '१', '२': '२', '३': '३', '४': '४', '५': '५', '६': '६', '७': '७', '८': '८', '९': '९', ';': ';', '-': '-', '\\': '\\', '<': '<', '>': '>', '/': '/', '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')', '_': '_', '+': '+', '|': '|', '"': '"', "'": "'"}
hinToengWord2 = {'ऩ':'n',':' : ':','।':'।','ड़': 'ḍ','फ़':'ph' ,'ऱ':'r','ज़':'j','ग़':'g','ख़':'kh','क़':'k','ढ़':'dhh','फ़': 'ph', 'ड़': 'ḍ', 'ऎ': 'e', 'ख़': 'kh', 'ढ़': 'dhh', 'ि्व': 'vi', 'ज़': 'j', 'फ़': 'ph', 'ढ़': 'dhh', 'ग़': 'g', 'क़': 'k', 'ख़': 'kh', 'ँ': 'n', 'फ़': 'ph', 'श्ा': 'sh', 'ट्र': 'ṭr', 'भ्र': 'bhr', 'ग्र': 'gr', 'दृ': 'dra', 'प्र': 'pr', 'अं': 'an', 'ष्ट्र': 'shhṭra', 'क्ष': 'kshh', 'ऑ': 'o', 'आ': 'ạa', 'त्र': 'tr', 'ॉ': 'o', 'ं': 'm', 'ः': ':', 'अ': 'a', 'आ': 'ạa', 'अ:': 'ah', 'इ': 'i', 'ई': 'i', 'उ': 'u', 'ऊ': 'u', 'ऋ': 'ru', 'ज़': 'j', 'ड़': 'ḍ', 'ऌ': 'lru', 'ए': 'e', 'ऐ': 'e', 'ओ': 'o', 'औ': 'aụ', 'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ḍa', 'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ज्ञ': 'ghy', 'ट': 'ṭ', 'ठ': 'thh', 'ड': 'ḍ', 'ढ': 'dhh', 'ड़': 'ḍ', 'ण': 'ṅ', 'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n', 'प': 'p', 'ब': 'b', 'भ': 'bh', 'म': 'm', 'य': 'y', 'र': 'r', 'ऱ': 'r', 'ल': 'l', 'ळ': 'L', 'व': 'v', 'श': 'sh', 'ष': 'shh', 'स': 's', 'ह': 'h', 'फ': 'ph', 'ज': 'j', 'ा': 'a', 'ि': 'i', 'ी': 'i', 'ु': 'u', 'ू': 'u', 'ृ': 'ru', 'ॄ': 'ru', 'े': 'e', 'ै': 'ại', 'ो': 'o', 'ौ': 'aụ', 'ॐ': 'om', '.': '.', ',': ',', '?': '?', '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',  '०': '०', '१': '१', '२': '२', '३': '३', '४': '४', '५': '५', '६': '६', '७': '७', '८': '८', '९': '९', ';': ';', '-': '-', '\\': '\\', '<': '<', '>': '>', '/': '/', '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')', '_': '_', '+': '+', '|': '|', '"': '"', "'": "'"}
//*********  GLOBAL DECLARATIONS  *********

    var sign = ["ू", "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "े", "े", "ै", "ो", "ो", "ौ", "ॉ", "्", "ि्व"];
    var sign1 = ["ू", "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "े", "े", "ै", "ो", "ो", "ौ", "ॉ", "ं"];
    var _hn = 'n:'
    var schwa = "a"
    var schwC
    var hal = "ha1"
    var spc = "spc"
    var newl = "new"
    var spc = " "
    var _new = ""
    var schr = "ं , . ? ~ [ ] < > ; / \\ : 0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ + |"
    var sList = schr.split(/\s/g);
    var vList = '';
    var _vls = vList.split(/\s/g);
    var _nV = _vls.length;
    spw = Get_Words(schr)
    var withAnArr = ["उ", "क" , "क़", "ख", "ख़" , "ग" , "ग्र", "ग़", "घ" , "च" , "छ" , "ज" , "ज़", "ट" , "ट्र", "ि्व", "ठ" , "ड", "ड़", "ङ", "ढ", "ढ़", "ज्ञ" , "ण" , "त" , "थ" , "द" , "दृ", "ध" , "न" , "य" , "र", "ऱ", "ल", "ळ", "श", "ष", "ष्ट्र", "श्ा", "स" , "ह", "क्ष", "ज्ञ", "ॐ", "झ" ];
    var withAmArr = ["प" , "फ" , "फ़", "ब" , "भ" , "भ्र", "म" , "व", "ि्व", "प्र" ];
    var wordHash = {}
    var _sph = new Array()
    for (var k = 0; k <= spw.length; k++)
        _sph[spw[k]] = 1
    extr = ""
    var uniText
    tLang = hinToengWord			//DEFAULT set as hindi
    var s = "";		//intialization for the chngLang()
    var myLine = "";
    var angFlag = 0;
    var passLen = 0;

    vListArr = new Array("ॐ", "उ", "ई", "इ", "अ", "आ", "ऊ", "ू", "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "े", "े", "ै", "ो", "ो", "ौ", "्");

    myhash = {
    अ: A = new Array("आ", "अ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", 'ऎ', "ओ", "औ", "अः", "ॐ"),
    क: B = new Array("क", "क़"),
    ख: C = new Array("ख", "ख़", "ख़"),
    ग: D = new Array("ग", "ग्र", "ग़"),
    घ: E = new Array("घ"),
    च: F = new Array("च"),
    छ: G = new Array("छ"),
    ज: H = new Array("ज", "ज़","ज़"),
    ट: I = new Array("ट", "ट्र", "ि्व"),
    ठ: J = new Array("ठ "),
    ड: K = new Array("ड", "ङ", "ड़", "ड़"),
    ढ: L = new Array("ढ", "ढ़", "ढ़","ढ़"),
    ण: M = new Array("ण"),
    त: N = new Array("त"),
    थ: O = new Array("थ"),
    द: P = new Array("द", "दृ"),
    ध: Q = new Array("ध"),
    न: R = new Array("न"),
    प: S = new Array("प", "प्र"),
    फ: T = new Array("फ", "फ़", "फ़", "फ़"),
    ब: U = new Array("ब"),
    भ: V = new Array("भ", "भ्र"),
    म: W = new Array("म"),
    य: X = new Array("य"),
    र: Y = new Array("र", "ऱ"),
    ल: Z = new Array("ळ", "ल"),
    व: Z = new Array("व", "ि्व"),
    श: Z = new Array("श", "ष", "श्ा"),
    ष: Z = new Array("ष", "ष्ट्र"),
    स: Z = new Array("स"),
    ह: Z = new Array("ह"),
    क्ष: Z = new Array("क्ष"),
    झ: Z = new Array("झ", "ज्ञ"),
    ॐ: Z = new Array("ॐ"),
    ':': der = new Array(":"),
    '.': E1 = new Array("."),
    ',': E2 = new Array(","),
    '?': E3 = new Array("?"),
    1: E4 = new Array("1"),
    2: E5 = new Array("2"),
    3: E6 = new Array("3"),
    4: E7 = new Array("4"),
    5: E8 = new Array("5"),
    6: E9 = new Array("6"),
    7: E10 = new Array("7"),
    8: E11 = new Array("8"),
    9: E12 = new Array("9"),
    0: E13 = new Array("0"),
    '१': E14 = new Array("१"),
    '२': E15 = new Array("२"),
    '३': E16 = new Array("३"),
    '४': E17 = new Array("४"),
    '५': E18 = new Array("५"),
    '६': E19 = new Array("६"),
    '७': E20 = new Array("७"),
    '८': E21 = new Array("८"),
    '९': E22 = new Array("९"),
    '०': E23 = new Array("०")
};

    translate = function (value) {
        return NewParse(value);
    };

    NewParse = function (text) {
        var uni = ""
        var hArray = new Array();
        var tL = new Array();
        hArray = GetLines(text);  // GetLines function call and send words
        passLen = hArray.length; // find Array length
        var myLine1 = round(myLine);
        if (hArray.length <= 23)
            tL = hArray
        else {
            var curPos = myLine1
            var v = curPos - 23
            if (v <= 0) {
                v = 0
            }
            for (var u = 0; u < 23; u++) {
                if (v < hArray.length)
                    tL[u] = hArray[v];
                v++
            }
        }
        for (var k = 0; k < tL.length; k++) {
            var ml = tL[k]
            var ml1 = IT3toIT4(ml)
            var mw = Get_Words(ml1)
            for (var z = 0; z < mw.length; z++) {
                if (!wordHash[mw[z]]) {
                    wordHash[mw[z]] = {}
                }
                if (wordHash[mw[z]] && wordHash[mw[z]][hinToengWord]) {
                    uW = wordHash[mw[z]][hinToengWord]
                } else {
                    uW = Trans(mw[z]);
                    wordHash[mw[z]][hinToengWord] = uW;
                }
                uni = uni + uW
                if (spc != null)
                    uni = uni + spc;
            }
            if (_new != null)
                uni = uni + _new;
            //uni = uni + "\n";
        }
        return uni.trim();
    };

   function Trans(mw) {
    var lastchar;
    var lastSingleChar;
    if(mw.match(">")){ // if words are special character then return uniText
        angFlag = 0;
        uniText = uniText.replace(/[\>]/g, '');
    }else if(mw.match("<") || angFlag == 1){
        angFlag = 1;
        if (mw != "<" || mw != ">")
            uniText = mw;
        uniText = uniText.replace(/[\<]/g, '');
    }else if(mw.match(/^[a-zA-Zạụṭḍṅ]/)){
        // console.log("english",mw);
        uniText = mw;
    }
    else{
        uniText = "";
        psyl = new Array();
        psyl = syllibify(mw); // syllibify function call
        for(var i = 0; i < psyl.length; i++){
            var halF = 0;
            var phs = phonify(psyl[i]);
            var phsLength = phs.length;
            lastchar = phs[phs.length - 1];
            var vpos = vowPos(phs);
            if(vpos > 0){
                var spChar = 0;
                for(var e = 0; e < sList.length; e++){
                    if (phs[vpos - 1] == sList[e]); // if special charactor than find into sList array
                    spChar = 1;
                }
                if(phs[vpos] == schwa){
                    if(spChar == 0){
                        phs[vpos] = "";
                    }
                }else{
                    if(spChar == 0){
                        phs[vpos] = phs[vpos] + "1";
                    }
                }
                if(vpos == 1){
                    if(vpos != phs.length - 1){
                        halF = 1;
                    }
                }else{
                    halF = 1;
                }
            }else if(vpos < 0){
                halF = 2;
            }else{
                halF = 3;
            }

            if(halF == 1){
                //  console.log("length--1-", phs.length)
                for(var f = 0; f <= vpos - 2; f++){
                    if(tLang[phs[f]] != null){
                        if(sign.indexOf(phs[f + 1]) != -1 && phs.length - 1){
                            tLang = hinToengWord1;
                            uniText = uniText + tLang[phs[f]];
                        }else{
                            tLang = hinToengWord;
                            uniText = uniText + tLang[phs[f]];
                        }
                    }
                    if(tLang[hal] != null){
                        var spChar = 0;
                        for(var e = 0; e < sList.length; e++){
                            if(tLang[phs[f]] == sList[e]);
                            spChar = 1;
                        }
                        if(spChar == 0){
                            uniText = uniText + tLang[hal];
                        }
                    }
                    if(vpos - 2 - f > 0){
                        if(extr != null){
                            uniText = uniText + extr;
                        }
                    }
                }

                for(var f = vpos - 1; f <= vpos; f++){
                    if(tLang[phs[f]] != null){
                        uniText = uniText + tLang[phs[f]];
                    }
                }

                for(var f = vpos + 1; f < phs.length; f++){
                    if(tLang[phs[f]] != null){
                        uniText = uniText + tLang[phs[f]];
                    }
                    var alw = IsAllowed(phs[f])
                    if(alw == 0){
                        if(tLang[hal] != null){
                            uniText = uniText + tLang[hal];
                        }
                    }
                    if(phs.length - 1 - f >= 2){
                        if(extr != null){
                            uniText = uniText + extr;
                        }
                    }
                }
            }else if (halF == 3){
                //  console.log("length-3--", phs.length);
                if(tLang[phs[0]] != null){
                    uniText = uniText + tLang[phs[0]];
                }
                for(var f = 1; f < phs.length; f++){
                    if(tLang[phs[f]] != null){
                        if(sign.indexOf(phs[f + 1]) != -1 && phs.length - 1){
                            tLang = hinToengWord1;
                            uniText = uniText + tLang[phs[f]];
                        }else{
                            tLang = hinToengWord;
                            uniText = uniText + tLang[phs[f]];
                        }
                    }
                    var alw = IsAllowed(phs[f]);
                    if(alw == 0){
                        if(tLang[hal] != null){
                            var spChar = 0;
                            for(var e = 0; e < sList.length; e++){
                                if(tLang[phs[f]] == sList[e]);
                                spChar = 1;
                            }
                            if(spChar == 0){
                                uniText = uniText + tLang[hal];
                            }
                        }
                    }
                    if(phs.length - 1 - f >= 2){
                        if(tLang[extr] != null){
                            uniText = uniText + tLang[extr];
                        }
                    }
                }
            }else if (halF == 2){
                for(var f = 0; f < phs.length; f++){ // one by one find english character and store in to uniText
                    //console.log("length-Main--",phs.length)
                    if(phs.length == 1){
                        tLang = hinToengWord;
                        uniText = uniText + tLang[phs[f]];
                    }else{
                        lastSingleChar = phs[phs.length - 2];
                        if(tLang[phs[f]] != null){
                            if(sign.indexOf(phs[f]) != -1){
                                if(sign.indexOf(phs[f + 1]) != -1 && withAmArr.indexOf(phs[f + 1]) != -1) {
                                    tLang = hinToengWord2;
                                    uniText = uniText + tLang[phs[f]];
                                }else if(sign.indexOf(phs[f + 1]) != -1 && withAnArr.indexOf(phs[f + 1]) != -1) {
                                    tLang = hinToengWord1;
                                    uniText = uniText + tLang[phs[f]];
                                }else{
                                    if(phs[f + 1] == 'ं'){
                                        tLang = hinToengWord;
                                        uniText = uniText + tLang[phs[f]];
                                    }else{
                                        if(withAnArr.indexOf(phs[f + 1]) != -1){
                                            tLang = hinToengWord1;
                                            uniText = uniText + tLang[phs[f]];
                                        }else if(withAmArr.indexOf(phs[f + 1]) != -1){
                                            tLang = hinToengWord2;
                                            uniText = uniText + tLang[phs[f]];
                                        }else if(lastchar == phs[f]){
                                            tLang = hinToengWord;
                                            uniText = uniText + tLang[phs[f]];
                                        }else if(phs[f+1] == '-'){
                                            tLang = hinToengWord;
                                            uniText = uniText + tLang[phs[f]];
                                        }else{
                                            tLang = hinToengWord1;
                                            uniText = uniText + tLang[phs[f]];
                                        }
                                    }
                                }
                            }
                            else if(phs[f] == 'ं'){
                                if(withAnArr.indexOf(phs[f + 1]) != -1){
                                    tLang = hinToengWord1;
                                    uniText = uniText + tLang[phs[f]];
                                } else if (withAmArr.indexOf(phs[f + 1]) != -1){
                                    tLang = hinToengWord2;
                                    uniText = uniText + tLang[phs[f]];
                                }else{
                                    if(withAnArr.indexOf(lastSingleChar) != -1){
                                        tLang = hinToengWord1;
                                        uniText = uniText + tLang[phs[f]];
                                    }else if(withAmArr.indexOf(lastSingleChar) != -1){
                                        tLang = hinToengWord2;
                                        uniText = uniText + tLang[phs[f]];
                                    }
                                }
                            }
                            else if(lastchar == phs[f]){
                                if(phs.length - 1 == 0){
                                    tLang = hinToengWord;
                                    uniText = uniText + tLang[phs[f]];
                                }
                                else if(sign.indexOf(phs[f + 1]) != -1  || phs[f + 1] == "~") {
                                    if(phs.lastIndexOf(".") === f){
                                        tLang = hinToengWordfordot;
                                        uniText = uniText + tLang[phs[f]];
                                    }else if(sign1.indexOf(phs[f + 2]) != -1){
                                        if(phs[f+1] == "ा"){
                                            tLang = hinToengWord;
                                        }else{
                                            tLang = hinToengWord1;
                                        }
                                        uniText = uniText + tLang[phs[f]];
                                    }
                                    else{
                                        if(phs[f-1] =="्" || phs[f-1] =="ं"){
                                            if(sign.indexOf(phs[f + 1]) != -1){
                                                if(phs[f+1] == "ा"){
                                                    tLang = hinToengWord;
                                                }else{
                                                    tLang = hinToengWord1;
                                                }
                                                uniText = uniText + tLang[phs[f]];
                                            }else{
                                                tLang = hinToengWord;
                                                uniText = uniText + tLang[phs[f]];
                                            }
                                        }else if(phs[f+2] == '-'){
                                            tLang = hinToengWord;
                                            uniText = uniText + tLang[phs[f]];
                                        }else{
                                            if(sign.indexOf(phs[f + 1]) != -1){
                                                if(phs[f+1] == "ा"){
                                                    tLang = hinToengWord;
                                                }else{
                                                    tLang = hinToengWord1;
                                                }
                                                uniText = uniText + tLang[phs[f]];
                                            }else{
                                                tLang = hinToengWord;
                                                uniText = uniText + tLang[phs[f]];
                                            }
                                        }
                                    }
                                }
                                else{
                                    tLang = hinToengWord;
                                    uniText = uniText + tLang[phs[f]];
                                }
                            }
                            else if(sign.indexOf(phs[f + 1]) != -1 || phs[f + 1] == "~"){
                //console.log("this is sign:--",phs[f+1],phs[f]);
                                if(phs[f+1] == "ा"){
                                    tLang = hinToengWord;
                                }else{
                                    tLang = hinToengWord1;
                                }
                                if( phs[f-1] =="्" || phs[f-1] =="ं")  {
                                    uniText = uniText + tLang[phs[f]];
                                }else{
                                    uniText = uniText + tLang[phs[f]];
                                }
                //console.log("this is sign:--",uniText);
                            }
                            else{
                                if(phs[f + 1] == 'ं' && lastchar == phs[f + 1] && phs.indexOf(phs[f]) != 0) {
                                    //    console.log("sign last--1",phs[f])
                                    if (phs.lastIndexOf(".") === f) {
                                        tLang = hinToengWordfordot;
                                        uniText = uniText + tLang[phs[f]];
                                    } else {
                                        tLang = hinToengWord;
                                        if(phs[f-1] =="ं")  {
                                            uniText = uniText + tLang[phs[f]];
                                        }else{
                                            uniText = uniText + tLang[phs[f]];
                                        }
                                    }
                                }
                                else{
                                    if (phs.indexOf(phs[f]) != 0){
                                        if( phs[f-1] =="्" || phs[f-1] =="ं"){
                                            tLang = hinToengWord;
                                            uniText = uniText + tLang[phs[f]];
                                        }else if(phs[f-1] == '-'){
                                            tLang = hinToengWord;
                                            uniText = uniText + tLang[phs[f]];
                                        }else{
                                            tLang = hinToengWord;
                                            uniText = uniText + tLang[phs[f]];
                                        }
                                    }else if(phs.lastIndexOf(phs[f]) != -1){
                                        tLang = hinToengWord;
                                        uniText = uniText + tLang[phs[f]];

                                    }else{
                                        if(lastchar == phs[f + 1]){
                                            tLang = hinToengWord;
                                            uniText = uniText + tLang[phs[f]];
                                            //    console.log("this if in last---", uniText)
                                            //   console.log(tLang[phs[f]]);
                                        }else{
                                            //  console.log("2222222----", phs[f])
                                            if(phs[f + 1] == "."){
                                                tLang = hinToengWord1;
                                                uniText = uniText + tLang[phs[f]];
                                            }else{
                                                tLang = hinToengWord;
                                                uniText = uniText + tLang[phs[f]];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        var alw = IsAllowed(phs[f])
                        if(alw == 0){
                            if(tLang[hal] != null){
                                var spChar = 0;
                                for(var e = 0; e < sList.length; e++){
                                    if(tLang[phs[f]] == sList[e]){
                                        spChar = 1;
                                    }
                                }
                                if(spChar == 0){
                                    uniText = uniText + tLang[hal];
                                }
                            }
                        }
                    }
                }
            }else if(halF == 0){
                for(var f = 0; f < phs.length; f++){
                    if(tLang[phs[f]] != null){
                        if(sign.indexOf(phs[f + 1]) != -1 && phs.length - 1){
                            tLang = hinToengWord1;
                            uniText = uniText + tLang[phs[f]];
                        }else{
                            tLang = hinToengWord;
                            uniText = uniText + tLang[phs[f]];
                        }
                    }
                }
            }
        }
    }
    //  console.log("===return uniText===", uniText);
    return uniText; // returns english words
}


    function syllibify(nam) {
        var eW = nam;
        var phones = phonify(eW); // phonify function call
        var nv_pr = GetNVowels(phones);
        var psyl = new Array();
        psyl = syllibify_int(phones, nv_pr);
        return psyl;
    };

    function GetNVowels(arr) {
        list = arr;
        var len = list.length;
        var nv_pr1 = 0;
        var i;
        for (i = 0; i < len; i++) {
            var lph = list[i];
            if (IsVowel(lph)) {
                nv_pr1++;
            }
        }
        return nv_pr1;
    };

    function IsVowel(vowel) {
        var tPh = vowel;
        var f = 0;
        var j;
        for (j = 0; j < _nV; j++) {
            if (tPh == _vls[j]) {
                f = 1;
                break;
            }
        }
        return f;
    };

    function phonify(ipstr) { // words are splite into array
        var gastr = new String(ipstr);
        var gstr = new Array(gastr.length)
        for (i = 0; i < gastr.length; i++) {
            gstr[i] = gastr.charAt(i);
            gstr2 = gastr.charAt(i + 1);
        }
        newHash = changeHash();
        arr_index = 0;
        oldValue = "";
        converted = "";
        end_arr = new Array();
        var strlen = gstr.length;

        for (var ti = 0; ti < strlen; ti++) { //  find one by one charactor
            newValue = oldValue;
            newValue = newValue + gstr[ti];
            if (newHash[newValue]) {
                oldValue = newValue;
            } else if ((ti + 1) < strlen && newHash[newValue + gstr[ti + 1]]) {
                oldValue = newValue + gstr[ti + 1];
                ti++;
            } else {
                converted = converted + newHash[oldValue];
                var str = "Hello" + oldValue + "boy";
                if (oldValue != "") {
                    end_arr[arr_index] = oldValue;
                    arr_index++;
                }
                oldValue = gstr[ti]
            }
        }
        end_arr[arr_index] = oldValue;
        return end_arr;
    };

    function changeHash() { // find hindi words in myhash object
        newHash = {}
        for (var key in myhash) {
            for (var eachChaSet in myhash[key]) {
                newHash[myhash[key][eachChaSet]] = key;
            }
        }
        return newHash;
    };

    function vowCnt(varr1) {
        var vArr1 = new String(varr1)
        var vArr = new Array(vArr1.length);
        for (je = 0; je < vArr1.length; je++)
            vArr[je] = vArr1.charAt(je);
        vCnt = 0
        for (var ij = 0; ij < vArr.length; ij++) {
            for (var p = 0; p < vListArr.length; p++) {
                if (vArr[ij] == vListArr[p]) vCnt++
            }
        }
        return vCnt
    };

    function syllibify_int(phones, nvpr) {
        ph = phones;
        nv_pr = nvpr;
        var nPh = ph.length;
        var syl = new Array();
        sI = 0;
        nv_vis = 0;
        syl[sI] = ph[0];
        cPh = ph[0];
        if (IsVowel(cPh)) {
            nv_vis++;
        }
        var i;
        for (i = 1; i < nPh; i++) {
            if (ph[i] == "#") {
                continue;
            }
            if (i + 1 == nPh && !(IsVowel(ph[i]))) {
                syl[sI] = syl[sI] + ph[i];
                sI++;
                continue;
            }
            if (ph[i] == _hn) {
                syl[sI] = syl[sI] + ph[i];
                continue;
            }
            tPh = ph[i - 1];
            cPh = ph[i];
            if (IsVowel(cPh)) {
                nv_vis++;
            }
            if ((IsVowel(tPh)) && (IsVowel(cPh))) {
                sI++;
                syl[sI] = ph[i];
                continue;
            }
            if (((IsVowel(tPh)) || (ph[i - 1] == _hn)) && (nv_vis < nv_pr)) {
                sI++;
                syl[sI] = ph[i];
            } else {
                syl[sI] = syl[sI] + ph[i];
            }

        }
        return syl;
    };

    function GetLines(lines) {

        return lines.split(/\n/); //  Here splite words and return value
    };

    function vowPos(gWord) {
        var arr = gWord; //@{ar};
        var vpos = -1;
        var y;

        for (y = 0; y <= arr.length; y++) {
            if (IsVowel(arr[y])) {
                vpos = y;
                break;
            }
        }
        return vpos;
    };

    function IT3toIT4(gW) {
      //  gW = gW.replace(/[\']/g, ':')
      //  gW = gW.replace(/[\-]/g, '~')
      //  gW = gW.replace(/[\?]/g, '')
        return gW
    };

    function IsAllowed(p) {
        var t = p
        var r = 0
        if (_sph[t])
            r = 1
        return (r)
    };

    function Get_Words(line) {
        var lne = line
        lne = Make_SingleSpace(lne)
        var word1 = lne.split(/ /g)
        return word1
    };

    function Make_SingleSpace(ln) {
        ln = ln.replace(/\s+$/g, '')
        ln = ln.replace(/^\s+/g, '')
        ln = ln.replace(/\t+/g, ' ')
        ln = ln.replace(/\s+/g, ' ')
        return ln
    };

    function chngLang() {

        s = document.box.Languages.value;
        if (s == "hindi")
            tLang = hindi;
        if (s == "hindi") {
            document.box.pic.src = "layout1.png";
            document.box.pic.height = 215;
            document.box.pic.width = 551;
        }
        sendVal()
    };

    function LangDefault() { // set defauli array
        tLang = hindi;
    };

    function round(n) {
        var s = "" + Math.round(n * 100) / 100
        var i = s.indexOf('.')
        if (i < 0)
            return s;
        var t = s.substring(0, i);
        return t
    };

    return {
        "translate": translate
    }
}();
