/* 독립운동가들 순서
                      여성/무장 여성,소통 여성,외교 사회,통찰 사회,무장 사회,소통 재외,소통     재외,소통 재외,외교 외국,무장   외국,통찰   외국,외교*/
var p_list = new Array('남자현', '김순애', '방순희', '조동호','김명시','권오설','김 알렉산드라','임천택','한시대','후세 다츠지','스코필드','조지 루이스 쇼');

// 독립운동가들 배열
var p_ary = new Array(12).fill(0);



function f1_1(){
  p_list = new Array('남자현', '김순애', '방순희', '조동호','김명시','권오설','김 알렉산드라','임천택','한시대','후세 다츠지','스코필드','조지 루이스 쇼');
  p_ary = new Array(12).fill(0);
  //남자현은 p_ary[0]이니깐
  for(i=0; i< 6 ; i++){
    p_ary[i] += 30;
  }
  /*var a = p_ary[5];
  alert(a);*/
  //amplify.store("answers", p_ary);
  location.href = "q2.html"
}


function f1_2(){
  p_list = new Array('남자현', '김순애', '방순희', '조동호','김명시','권오설','김 알렉산드라','임천택','한시대','후세 다츠지','스코필드','조지 루이스 쇼');
  p_ary = new Array(12).fill(0);
  for(i=6; i< 12 ; i++){
    p_ary[i] += 30;
  }
  var a = p_ary[6];
  alert(a);
  location.href = "q2.html"

}

function f2_1(){
  amplify.store("answers");
  for(i=9; i<12; i++){
    p_ary[i] += 20;
  }
  location.href = "q3.html"
}


function f2_2(){
  for(i=0; i<9; i++){
    p_ary[i] += 10;
  }
  location.href = "q3.html"
  var string = p_ary[6];
  alert(string);
}
