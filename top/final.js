var project = jQuery('.project'); //.project(css参照)をjQueryオブジェクトに指定
var pLink = project.find('.project__link'); //projectの中の.project__linkをpLinkに代入
var pBg = project.find('.project__bg-item'); //上記同様

var changeBg = function() {　//背景画像を変える関数
  var thisProject = jQuery(this); //'mouseenter'されるpLinkをthisProjectに代入
  var thisProjectIndex = thisProject.parent().index();//thisProjectが.project_linkの親クラス==.project__listクラスで何番目か
  var thisProjectBg = pBg.eq(thisProjectIndex);// 上で取得したthisProjectIndex番目の.project__bg-item(html参照)を代入
  
  pBg.removeClass('project__bg-item--active');//一旦全てのリンクからactiveクラスを削除(前にactiveだったものを取り下げる)
  pLink.css('opacity', '0.4');//全てのリンクのスタイルも未選択状態にする(透明度を上げ, 目立ちやすくする)
  
  thisProject.css('opacity', '1'); //そこからmouseenterされたリンクのスタイルを変える(透明度を下げ, 目立ちやすくする)
  thisProjectBg.addClass('project__bg-item--active');//activeクラスを追加, cssで指定されたtransformとopacityに.
};

var showFirst = function() { //ページがロード/リロードされたときの動き
  pLink.css('opacity', '0.4'); //全てのリンクのスタイルを一旦未選択状態に
  pLink.parent().first().children().css('opacity', '1');//pLinkの親クラス.project__listの一番最初の子クラス(.project__link)を選択状態に
  pBg.first().addClass('project__bg-item--active');//一番最初の.project__bg-itemをactiveに.
};

var init = function() {//実行する関数
  jQuery(document).on('ready', showFirst);//htmlの読み込みが終わったらshowFirstを実行
  pLink.on('mouseenter', changeBg);//pLinkのどれかがホバーされたらそのリンクにchangeBgを実行
};

init(); //実行