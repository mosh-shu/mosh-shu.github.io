var ahoCount = 0 //定義

function ahoClose(){ //ページを閉じようとしたアホを追撃する関数
  ahoCount += 1 //"ページを閉じる"をクリックした回数をカウントする
  var str = document.getElementById("aho"); //innerHTMLでメッセージを変更するのでidを取得
  for (i=0; i<ahoCount; i++){ //ページを閉じようとした回数分アホが増える
    str.innerHTML = str.innerHTML + "アホ!!!"; //innerHTMLでid="aho"の部分を変更, <span></span>を用いてクラスを指定, cssに従って文字を装飾.
  }
}
