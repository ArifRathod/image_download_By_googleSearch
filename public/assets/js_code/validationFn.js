/**
 * Created by Arif on 21-1-2016.
 */  
var bucket1=['k','kh','c','ch','chh','ṭ','thh','t','th','p','kshh','ks','tr'];

function checkbucket(current_char,next_char,callback){
    if(next_char != null){
        var last_char = next_char.substring(next_char.length, next_char.length-1),
        second_last_char = next_char.substring(next_char.length-1, next_char.length-2),
        vowels =  ['a','ạ','e', 'i', 'o', 'u','ụ'],
        bucket_check_char;

        if(vowels.indexOf(last_char) != -1){
            if(vowels.indexOf(second_last_char) != -1){
                bucket_check_char = next_char.substring(0,next_char.length-2);
            }else{
                bucket_check_char = next_char.substring(0,next_char.length-1);
            }
        }else{
            bucket_check_char = next_char;
        }

       // //console.log("********************************",bucket_check_char)

        if(bucket1.indexOf(bucket_check_char) != -1){
            callback({"Bucket": "B1"});
        }else{
            callback({"Bucket": "B2"});
        }
    }else{
         callback({"Bucket": "B1"});
    }   
};

function searchcheckbucket(current_char,next_char,callback){
   // //console.log(current_char,next_char)
    if(next_char != null){
        var vowels =  ['a','ạ','e', 'i', 'o', 'u','ụ'],
            last_char = next_char.substring(next_char.length, next_char.length-1),
            second_last_char = next_char.substring(next_char.length-1, next_char.length-2),
            bucket_check_char,realchar= next_char;
           

        if(vowels.indexOf(last_char) != -1){
            if(vowels.indexOf(second_last_char) != -1){
                bucket_check_char = next_char.substring(0,next_char.length-2);
            }else{
                bucket_check_char = next_char.substring(0,next_char.length-1);
            }
        }else{
            bucket_check_char = next_char;
        } 
       // //console.log(bucket_check_char) 
        var nextofRealChar = realchar.slice(-1);
        
        if(bucket1.indexOf(bucket_check_char) != -1){
            callback({"Bucket": "B1"});
        }else{
            callback({"Bucket": "B2"});
        }
    }else{
         callback({"Bucket": "B1"});
    }
    
};

function toUnicode(text) {
    var unicodeString = '';
    for (var i = 0; i < text.length; i++) {
        var code = text.charAt(i).charCodeAt(0).toString(16).toUpperCase();
        while (code.length < 4) {
            code = '0' + code;
        }
        //code = '\\u' + code;
        if (i == 0) {
            unicodeString += code;
        } else {
            unicodeString += "-" + code;
        }
    }
    return unicodeString;
}

function findBucket(onebyone,callback){
    var index=0,current_chracter,next_character;
    function outerCall(onebyone) {
        if (index < onebyone.length) {
            var i = 0,val=onebyone[index];              
            innerCall();
            function innerCall(){
                if(i<val.length-1){
                    current_chracter = val[i] ? val[i] : null;
                    next_character = val[i+1] ? val[i+1] : null;
                    checkbucket(current_chracter.text,next_character.text,function(bucketVal){
                        onebyone[index][i]["Bucket"]=bucketVal.Bucket;
                        i++;
                        innerCall();
                    });
                }else{
                    current_chracter = val[i] ? val[i] : null;
                    if(!onebyone[index+1]){
                        onebyone[index][i]["Bucket"]='B1';
                        index++;
                        outerCall(onebyone);
                    }else{
                        next_character = onebyone[index+1][0] != undefined ? onebyone[index+1][0] : null;
                        checkbucket(current_chracter.text,next_character.text,function(bucketVal){
                            onebyone[index][i]["Bucket"]=bucketVal.Bucket;
                            index++;
                            outerCall(onebyone);
                        });
                    }
                }
            }
        }else{
            onebyone.forEach(function(val){
                var a = val[val.length-1].charPlace;
                val.forEach(function(resp){
                    resp['wordLength'] = a;
                });
            });
            callback(onebyone);
        }
    };
    outerCall(onebyone);
}

function GetBucket(onebyone,callback){
    var index=0,current_chracter,next_character;
    function outerCall(onebyone) {
        if (index < onebyone.length) {
            current_chracter = onebyone[index] ? onebyone[index] : null;
            next_character = onebyone[index+1] ? onebyone[index+1] : null;
            if(next_character !=null){
                checkbucket(current_chracter.text,next_character.text,function(bucketVal){
                    onebyone[index]["Bucket"]=bucketVal.Bucket;
                    index++;
                    outerCall(onebyone);
                });
            }else{
                onebyone[index]["Bucket"]="B1";
                index++;
                outerCall(onebyone);
            }
        }else{
            var a = onebyone[onebyone.length-1].charPlace;
            onebyone.forEach(function(resp){
                resp['wordLength'] = a;
            });
            callback(onebyone);
        }
    };
    outerCall(onebyone);
}

function getparts(tree_word, cb) {
    var strarr = tree_word.split(""),
        vowels = ['a','ạ', 'e', 'i', 'o', 'u','ụ'],
        vowelscheck = ['a','ạ','e', 'i', 'o', 'u','ụ'],
        nonHarray = ['l','m','n','r','v','f','y'],
        str = "", tempAry = [];
    for (var i = 0; i < strarr.length; i++) {
        var nextChar = strarr[i + 1] != undefined ? strarr[i + 1] : "",
        next2Char = strarr[i + 2] != undefined ? strarr[i + 2] : "",
        next3Char = strarr[i + 3] != undefined ? strarr[i + 3] : "";
       // //console.log("working on::",strarr[i])
        if (vowels.indexOf(strarr[i]) == -1) {
            if(strarr[i] == "-" || strarr[i] == ":"){
                //console.log("wasfdasd",str)
                str = str + strarr[i];
                tempAry.push(str);
                str = "";
            }else if(strarr[i]+nextChar+next2Char == "ghy"){
                str = str + strarr[i]+nextChar+next2Char;
                i = i + 2;
                 if(vowels.indexOf(strarr[i+1]) == -1){
                    tempAry.push(str);
                    str= "";
                }
            }else if(strarr[i]+nextChar+next2Char+next3Char == "kshh"){
                str = str + strarr[i]+nextChar+next2Char+next3Char;
                i = i + 3;
                if(vowels.indexOf(strarr[i+1]) == -1){
                    tempAry.push(str);
                    str= "";
                }
            }else if(strarr[i]+nextChar == "tr"){
                str = str + strarr[i]+nextChar;
                i = i + 1;
                if(vowels.indexOf(strarr[i+1]) == -1){
                    tempAry.push(str);
                    str= "";
                }
            }
            else if(nonHarray.indexOf(strarr[i]) != -1 && vowels.indexOf(strarr[i+1]) == -1) {
                str = str + strarr[i];
                tempAry.push(str);
                str= "";
            }else if(nonHarray.indexOf(strarr[i]) == -1 && nextChar == 'h'){
                str = str + strarr[i];
            }else if(vowels.indexOf(strarr[i+1]) == -1){
                str = str+strarr[i];
                tempAry.push(str);
                str= "";
            }else{
                str = str + strarr[i];
            }
        }else {
       //     //console.log("this is else",str)
            if(nextChar == 'ạ') {
                str = str + strarr[i];
                tempAry.push(str);
                str = "";
            }else if(strarr[i] == 'ạ' && nextChar == "a" ){
                str = str + strarr[i] + nextChar;
                tempAry.push(str);
                str = "";
                i++;
            }else if((strarr[i] == 'ạ' && nextChar == "i") || (nextChar == 'ụ' && strarr[i] == "a")){
                str = str + strarr[i] + nextChar;
                tempAry.push(str);
                str = "";
                i = i + 1;
            }else if(strarr[i] == 'ạ' && nextChar != "a" ){
                str = str + strarr[i];
                tempAry.push(str);
                str = "";
            }else if(vowelscheck.indexOf(strarr[i]) != -1 &&  nextChar == "a" && next2Char != "ụ"){
                str = str + strarr[i] + nextChar;
                tempAry.push(str);
                str = "";
                i = i + 1;
            }
            else if(vowelscheck.indexOf(strarr[i]) != -1){
                str = str + strarr[i];
                tempAry.push(str);
                str = "";
            }
         //   //console.log("this is else",str,strarr[i])
        }

    }
    var repet = [];
    tempAry.forEach(function (a) {
        if (a.length > 0) {
        repet.push(a);
        }
    });
    cb(repet);
}

function check_half_full (tempAry,nextchar,callback) {
        //console.log(tempAry,nextchar)
        var charObj = {},
        type,
        NextChar,
        half_full_Ary = [],
        vowels =  ['a','ạ','e', 'i', 'o', 'u','ụ'],
        plurals = ['e', 'i','o', 'u','ụ','ạ'];
    for (var j = 0; j < tempAry.length; j++) {
        if(j<tempAry.length-1){
            var repet_item = tempAry[j],
            halffullcheck= tempAry[j].charAt(tempAry[j].length - 1),
            Firstcheck_char= tempAry[j+1].charAt(0),
            check_char= tempAry[j+1].charAt(tempAry[j+1].length - 1),
            check_char1= tempAry[j+1].charAt(tempAry[j+1].length - 2),
            check_char2= tempAry[j+1].charAt(tempAry[j+1].length - 3);

            if(vowels.indexOf(halffullcheck) != -1 || repet_item == "ghy"){
                type = "full";
            }else{
                type = "half";
            }
            //console.log("repet_item::",repet_item,check_char);
            if(vowels.indexOf(check_char) != -1){
                if(plurals.indexOf(check_char) != -1){
                    if(vowels.indexOf(check_char1) != -1 && check_char1 != "" && check_char1 != undefined ){
                        if(check_char2 != "" && check_char2 != undefined){
                            charObj = {"text":repet_item,"type":type,"NextChar":"P"};
                            half_full_Ary.push(charObj);
                        }else{
                            charObj = {"text":repet_item,"type":type,"NextChar":"VP"};
                            half_full_Ary.push(charObj);
                        }
                    }else if(Firstcheck_char == "o" ){
                        charObj = {"text":repet_item,"type":type,"NextChar":"VP"}; 
                        half_full_Ary.push(charObj);
                    }else if(check_char1 == ""){
                        charObj = {"text":repet_item,"type":type,"NextChar":"VS"}; 
                        half_full_Ary.push(charObj);
                    }else{
                        charObj = {"text":repet_item,"type":type,"NextChar":"P"}; 
                        half_full_Ary.push(charObj);
                    }           
                }else if(Firstcheck_char+check_char2+check_char1 == "ghy"){
                    charObj = {"text":repet_item,"type":type,"NextChar":"P"};
                    half_full_Ary.push(charObj); 
                }else if(check_char == "a" && check_char1 == "a"){
                        charObj = {"text":repet_item,"type":type,"NextChar":"P"};
                        half_full_Ary.push(charObj); 
                }else if(check_char == "ạ" && check_char1 == ""){
                    charObj = {"text":repet_item,"type":type,"NextChar":"VS"}; 
                    half_full_Ary.push(charObj);
                }else if(check_char == "a" && check_char1 == "ạ"){
                    charObj = {"text":repet_item,"type":type,"NextChar":"VP"}; 
                    half_full_Ary.push(charObj);
                }else{
                    charObj = {"text":repet_item,"type":type,"NextChar":"S"};
                    half_full_Ary.push(charObj);
                }   
            }else{
                if(tempAry[j+1] == "ghy"){
                    NextChar = "S"
                    type = type;
                    charObj = {"text":repet_item,"type":type,"NextChar":NextChar};
                    half_full_Ary.push(charObj);
                }else{
                    NextChar = "H"
                    type = type;
                    charObj = {"text":repet_item,"type":type,"NextChar":NextChar};
                    half_full_Ary.push(charObj);
                }
            }
        }else{
            //console.log(nextchar,tempAry[j])
            if(nextchar != null){
                var repet_item = tempAry[j],
                    halffullcheck= tempAry[j].charAt(tempAry[j].length - 1),
                    Firstcheck_char= nextchar.charAt(0),
                    check_char= nextchar.charAt(nextchar.length - 1),
                    check_char1= nextchar.charAt(nextchar.length - 2),
                    check_char2= nextchar.charAt(nextchar.length - 3);

                if(vowels.indexOf(halffullcheck) != -1){
                    type = "full";
                }else if(tempAry[j] == "ghy"){
                    type = "full";
                }else{
                    type = "half";
                }
                if(vowels.indexOf(check_char) != -1){
                    if(plurals.indexOf(check_char) != -1){
                        if(vowels.indexOf(check_char1) != -1 && check_char1 != "" && check_char1 != undefined ){
                            if(check_char2 != "" && check_char2 != undefined){
                                charObj = {"text":repet_item,"type":type,"NextChar":"P"};
                                half_full_Ary.push(charObj);
                            }else{
                                charObj = {"text":repet_item,"type":type,"NextChar":"VP"};
                                half_full_Ary.push(charObj);
                            }
                        }else if(check_char1 == "" && check_char == "o"){
                            charObj = {"text":repet_item,"type":type,"NextChar":"VP"}; 
                            half_full_Ary.push(charObj);
                        }else if(check_char1 == "" ){
                            charObj = {"text":repet_item,"type":type,"NextChar":"VS"}; 
                            half_full_Ary.push(charObj);
                        }else{
                            charObj = {"text":repet_item,"type":type,"NextChar":"P"}; 
                            half_full_Ary.push(charObj);
                        }           
                    }else if(Firstcheck_char+check_char2+check_char1 == "ghy"){
                        charObj = {"text":repet_item,"type":type,"NextChar":"P"};
                        half_full_Ary.push(charObj); 
                    }else if(check_char == "a" && check_char1 == "a"){
                            charObj = {"text":repet_item,"type":type,"NextChar":"P"};
                            half_full_Ary.push(charObj); 
                    }else if(check_char == "ạ" && check_char1 == ""){
                        charObj = {"text":repet_item,"type":type,"NextChar":"VS"}; 
                        half_full_Ary.push(charObj);
                    }else if(check_char == "a" && check_char1 == "ạ"){
                        charObj = {"text":repet_item,"type":type,"NextChar":"VP"}; 
                        half_full_Ary.push(charObj);
                    }                        
                    else{
                        charObj = {"text":repet_item,"type":type,"NextChar":"S"};
                        half_full_Ary.push(charObj);
                    }   
                }else{
                    if(nextchar  == "ghy"){
                        NextChar = "S";
                        type = type;
                        charObj = {"text":repet_item,"type":type,"NextChar":NextChar};
                        half_full_Ary.push(charObj);
                    }else{
                        NextChar = "H";
                        type = type;
                        charObj = {"text":repet_item,"type":type,"NextChar":NextChar};
                        half_full_Ary.push(charObj);
                    }
                }
            }else{
                repet_item = tempAry[j];
                NextChar = "S"
                type = "full";
                charObj = {"text":repet_item,"type":type,"NextChar":NextChar};
                half_full_Ary.push(charObj);
            }
        }        
    }
    callback(half_full_Ary);
}

function isInt(n) {
    return n % 1 === 0;
}
