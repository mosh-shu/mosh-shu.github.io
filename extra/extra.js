function prime(){ //素数判定をする前にinput値が数字のみで構成されているかをチェック
  // input値がintのみで構成されているかチェック
  var nStr = document.getElementById("primeOrNot").value; //input値を取ってくる
  var array = nStr.split(''); //inputを配列に分解
  for (var i=0, tf=0, l=array.length; i<l; i++){ //配列の要素を一つずつarray[i]としてチェック
    for (var j=0, c=0; j<10; j++){ //jを1から10までかぞえあげる
      if(array[i] != j){ // もし配列の要素がj(1-10)でなければ
        c += 1 //cに1を足す. array[i]が数字であれば1回だけこの行が無視される.
      }
    }
    if(c == 10){ //もしarray[i]のいずれかが1-10のどれでもなければ
      tf=1; //tfに１を代入する
      break //即座にfor文を終わらせ, 17行目に行く.
    }
  }
  //結果によって行動を変える
  if (tf == 1){ //もしtfが1なら, つまり1つでも1-10でない文字が入力されていたら
    alert("数値を入力してください"); //このメッセージを表示.
  } else { //もし数字のみが入力されていれば
    judgePrime(parseInt(nStr)); //strであるinput値をint型へと変換し, judgePrime関数に受け渡す.
  }
}

function judgePrime(n){ //素数判定を行う関数
  //特別なケースに対処
  if(n <= 0){ //もし正の値が入力されていなければ
    alert("1以上の数値を入力してください"); //メッセージを表示
  } else if(n == 1){ //もしinput値が1ならば
    alert("素数ではありません"); //このメッセージを表示
  } else if(n == 2 || n == 3){ //もしinput値が2か3なら
    alert("素数"); //メッセージを表示
  } else{　//特殊なケースでなければ(4以上の値)
    for (var i=2, tf=0, limit=n**0.5; i<limit; i++ ){ //2からnの平方根まで数え上げ、
      if (n % i == 0){ //一つでもnを割り切れたら素数ではないので、
        alert("素数ではありません"); //メッセージを表示し、
        tf = 1; //tfに1を代入して
        break;//forループを即座に終了
      }
    }
    if (tf == 0){ //もしtfが0のままなら(forループを強制終了されることなくここまできたら)
      alert("素数"); //nは素数であるのでこのメッセージを表示
    }
  }
}

function aho(){ //アホ判定をする前にinput値が数字のみで構成されているかをチェック
  // input値がintのみで構成されているかチェック
  var nStr = document.getElementById("aho").value; //input値を取ってくる
  var array = nStr.split(''); //inputを配列に分解
  for (var i=0, tf=0, l=array.length; i<l; i++){ //配列の要素を一つずつarray[i]としてチェック
    for (var j=0, c=0; j<10; j++){ //jを1から10までかぞえあげる
      if(array[i] != j){ // もし配列の要素がj(1-10)でなければ
        c += 1 //cに1を足す. array[i]が数字であれば1回だけこの行が無視される.
      }
    }
    if(c == 10){ //もしarray[i]のいずれかが1-10のどれでもなければ
      tf=1; //tfに１を代入する
      break //即座にfor文を終わらせ, 17行目に行く.
    }
  }
  //結果によって行動を変える
  if (tf == 1){ //もしtfが1なら, つまり1つでも1-10でない文字が入力されていたら
    alert("数値を入力してください"); //このメッセージを表示.
  } else {
    judgeAho(parseInt(nStr));
  }
}

function judgeAho(n){ //お前がアホかどうかを判定してやるコード. 4の倍数か4が含まれていればアホなんやで.
  if (n%4 == 0){ //nが4の倍数なら
    beAho(); //アホやん!
  }else{ //nが4の倍数でなくでも
   var nStr =  String(n); //nをint型からstr型に変更し, 
   var array = nStr.split(''); //nを配列に分解
   for (var i=0, tf=0, l=array.length; i<l; i++){ //配列の要素を一つずつ見る.
    if(array[i]=="4"){ //もし一つでも4を含めば
      beAho(); //アホになる!
      tf=1; //tfを1とし, 
      break //即座にfor文を抜け出す
    }
   }
  }
  if (tf==0){ //もしtfが0のままなら
    notAho(); //ようやくアホじゃないことになる
  }
}

function beAho(){ //アホのアホによるアホのための関数
  var str = document.getElementById("message"); //innerHTMLでメッセージを変更するのでidを取得
  str.innerHTML = "<span class='aho'>アホ!アホ!アホ!</span>"; //innerHTMLでid="message"の部分を変更, <span></span>を用いてクラスを指定, cssに従って文字を装飾.
  window.open('./aho.html', '','width=500, height=400'); //aho.html (アホ!と書かれたウィンドウ)をさらに追い打ちで開く. アホは徹底的に処罰する.
}

function notAho(){
  var str = document.getElementById("message"); //同じくinnerHTMLを使用
  str.innerHTML = "アホじゃない!"; //アホじゃない人には優しく
}


