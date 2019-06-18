function getUserData(user) {
    var progresses = '<ol>'; var clears = 0;
    for (var i = 0 ; i < rank_data[user].progress.length ; i++) {
        progresses = progresses + '<li><a href="'+rank_data[user].progress[i].link+'" target="blank_">' + rank_data[user].progress[i].map + ' ' + rank_data[user].progress[i].progress + '% </strong>(UP: '+rank_data[user].progress[i].score+')<strong></a></li>'
        if (rank_data[user].progress[i].progress == 100) {
            clears++;
        }
    }
    progresses = progresses + "</ol>"
    Swal.fire({
        title : "#"+(user+1)+" : "+rank_data[user].name,
        html : '<center><strong>점수 : '+rank_data[user].point + '<br>'+
            '최고 기록 : '+rank_data[user].highest+'<br>'+
            '클리어 기록 : '+clears+'개<br>'+
            '<br>보유 기록 : '+progresses+'<br>'+
            '</strong></center>'
    });

}

function UP_Info() {
    Swal.fire({
        html : ' - 유저 포인트가 뭔가요? <br>' +
            ' <strong>- 한국포럼에서 도입한 포인트 제도로, 각 유저가<br>' +
            ' 얼마나 어려운맵을 얼마나 많이 깼는지를 수치상으로 나타낸것입니다.</strong><br><br>' +
            ' - 어떻게 집계되나요? <br>' +
            ' <strong>- 포럼에 기록이 등재되면 자동으로 점수가 책정되어<br>' +
            ' 유저 포인트 랭킹에 적용됩니다. <a href="https://cafe.naver.com/geometrydashpnm/82765" target="blank_">(유저포인트 계산법 link)</a></strong><br><br>' +
            ' - 어떻게 사용하나요? <br>' +
            ' <strong>- 누가 포럼데몬을 많이 깼는지 확인도 할 수 있고,<br>' +
            ' 유저 포인트 랭킹에 올라간 플레이어를 누르면 그 플레이어가\n어떤 데몬을 깼는지 상세하게 볼 수 있습니다.<br>더 자세히 보고 싶다면 각 기록마다 영상 링크가 달려있으니, 해당 기능으로 확인 가능합니다.</strong><br><br>' +
            '<br>'
    })
}