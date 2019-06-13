function getUserData(user) {
    function roundNumber(num, scale) {
        if(!("" + num).includes("e")) {
            return +(Math.round(num + "e+" + scale)  + "e-" + scale);
        } else {
            var arr = ("" + num).split("e");
            var sig = ""
            if(+arr[1] + scale > 0) {
                sig = "+";
            }
            return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
        }
    }
  
    function getHz(hz) {
        var hzs = 1.0;
        return hzs;
    }
  
    function getRank(rank) {
        if (rank.key == null) {
            this.ranking = 51;
        } else {
            this.ranking = rank.key+1;
        }
        return this.ranking;
    }
  
    var rank_data = [];
  
    for (var i = 0; i < list.length; i++) {
        var entry = list[i];
        for (var a = 0 ; a < entry.vids.length ; a++) {
            var entry2 = entry.vids[a];
            var isLoot = false;
            for (var b = 0 ; b < rank_data.length ; b++) {
                if (rank_data[b].name == entry2.user) {
                    isLoot = true;
                }
            }
            var p;
            if (entry.key == null) {
                p = (((parseInt(entry.vids[a].percent) - parseInt(entry.percentToQualify))/(100 - parseInt(entry.percentToQualify)))*20)*getHz(entry.vids[a].hz);
            } else {
                p = ((((parseInt(entry.vids[a].percent) - parseInt(entry.percentToQualify))/(100 - parseInt(entry.percentToQualify)))*100*getHz(entry.vids[a].hz))/Math.sqrt(0.2*(getRank(entry)+4)));
            }
            if (isLoot == true) {
                for (var b = 0 ; b < rank_data.length ; b++) {
                    var user_name = rank_data[b].name.toUpperCase(); var data_name = entry2.user.toUpperCase();
                    if (user_name == data_name) {
                        rank_data[b].point = rank_data[b].point + p;
                        
                        if (rank_data[b].highest == "null" && parseInt(entry2.percent) == 100) {
                            rank_data[b].highest = entry.name; 
                        }
                        rank_data[b].progress.push({map : entry.name.toString(), progress : entry2.percent.toString(), link : entry2.link, score : roundNumber(p,3)});
                    }
                }
            } else {
                var map = entry.name.toString();
                if (parseInt(entry2.percent) != 100) {
                    map = "null";
                }

                var prog = [];
                prog.push({map : entry.name.toString(), progress : entry2.percent.toString(), link : entry2.link, score : roundNumber(p,3)});

                rank_data.push({name : entry2.user, highest : map, progress : prog, point : p});
            }
        }
    }
  
    var sortingField = "point"
    rank_data.sort(function(a, b) {
    return b[sortingField] - a[sortingField];
    });
  
    for (var i = 0 ; i < rank_data.length ; i++) {
        rank_data[i].point = roundNumber(rank_data[i].point, 3);
    }

    rank_data[user].progress.sort(function(a, b) {
        return b["score"] - a["score"];
    });
    
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