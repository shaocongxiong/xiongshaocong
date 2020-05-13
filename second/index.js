$(function() {
    var oBtn = $('.nav_item_2');
    var oContent = $('.nav_item_2_ul');

    oBtn.mouseover(function() {
        oContent.slideDown();
    })
    oBtn.mouseout(function() {
        oContent.slideUp();
    })
});
$(function() {
    var oBtn = $('.nav_item_3');
    var oContent = $('.nav_item_3_ul');

    oBtn.mouseover(function() {
        oContent.slideDown();
    })
    oBtn.mouseout(function() {
        oContent.slideUp();
    })
});
$(function() {
    var oBtn = $('.nav_item_4');
    var oContent = $('.nav_item_4_ul');

    oBtn.mouseover(function() {
        oContent.slideDown();
    })
    oBtn.mouseout(function() {
        oContent.slideUp();
    })
});
$(function() {
    var oBtn = $('.nav_item_5');
    var oContent = $('.nav_item_5_ul');

    oBtn.mouseover(function() {
        oContent.slideDown();
    })
    oBtn.mouseout(function() {
        oContent.slideUp();
    })
});
$(function() {
    var oBtn = $('.nav_item_6');
    var oContent = $('.nav_item_6_ul');

    oBtn.mouseover(function() {
        oContent.slideDown();
    })
    oBtn.mouseout(function() {
        oContent.slideUp();
    })
});

//大轮播图
var items = document.getElementsByClassName('item');
var goPrevBtn = document.getElementById('goPrev');
var goNextBtn = document.getElementById('goNext');
var points = document.getElementsByClassName('point');

var index = 0;
var time = 0;

var clearActive = function() {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = 'point';
    }
}
var goIndex = function() {
    clearActive();
    points[index].className = 'point active';
    items[index].className = 'item active';
}
var goNext = function() {
    if (index < 3) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}

var goPrev = function() {
    if (index == 0) {
        index = 3;
    } else {
        index--;
    }
    goIndex();
}
goNextBtn.addEventListener('click', function() {
    goNext();
    time = -20;
})

goPrevBtn.addEventListener('click', function() {
    goPrev();
    time = -20;
})

for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function() {
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        goIndex();
        time = -20;
    })
}

setInterval(function() {
    time++;
    if (time == 30) {
        goNext();
        time = 0;
    }
}, 100);

//tab标签页
$(function() {
    var ali = $('.tabTitle ul li');
    var aDiv = $('.tabContent div');
    ali.click(function() {
        $(this).attr("id", "current").siblings().attr("id", "");

        var index = $(this).index();

        aDiv.eq(index).show().siblings().hide();
    })
});

// 小轮播图
$(function() {
    var oBimg = $('.ul_1');
    var imgLi = $('.ul_2 li');
    var oArrow = $('.arrow');
    var aliwidth = $('.ul_1 li').eq(0).width();
    var Limg = 0;

    imgLi.click(function() {
        var index = $(this).index();
        $(this).addClass('attr').siblings().removeClass();
        oBimg.animate({
            'left': -aliwidth * index
        }, 300);
    });

    setInterval(function() {
        if (Limg == 3) {
            Limg = 0;
        } else {
            Limg++;
        }
        imgLi.eq(Limg).addClass('attr').siblings().removeClass();
        oBimg.animate({
            'left': -aliwidth * Limg
        }, 300);
    }, 3000);
});





//下拉菜单二
$(function() {
    var oBtn = $('h3');
    oBtn.click(function() {
        $(this).next('ul').slideToggle().siblings('ul').slideUp();
        $(this).attr("id", "current_1").siblings().attr("id", "");
    });
});

/* 弹出窗口 */

$(function() {
    var oBtn = $('.dog_1');
    var popWin = $('.popwindow_1');
    var oClose = $('.shut');

    oBtn.click(function() {
        popWin.show();
    });

    oClose.click(function() {
        popWin.hide();
    });
});
$(function() {
    var oBtn = $('.dog_2');
    var popWin = $('.popwindow_2');
    var oClose = $('.shut');

    oBtn.click(function() {
        popWin.show();
    });

    oClose.click(function() {
        popWin.hide();
    });
});
$(function() {
    var oBtn = $('.dog_3');
    var popWin = $('.popwindow_3');
    var oClose = $('.shut');

    oBtn.click(function() {
        popWin.show();
    });

    oClose.click(function() {
        popWin.hide();
    });
});
$(function() {
    var oBtn = $('.dog_4');
    var popWin = $('.popwindow_4');
    var oClose = $('.shut');

    oBtn.click(function() {
        popWin.show();
    });

    oClose.click(function() {
        popWin.hide();
    });
});

// 横向长型轮播图
$(function() {
    var oimg = $('.wrap_middle ul');
    var oimgHtml = oimg.html();
    oimg.html(oimgHtml + oimgHtml);
    var next = $('#gonext');
    var prev = $('#goprev');
    var itemwidth = $('.wrap_middle ul li').width();
    var index = 0;

    next.click(function() {
        oimg.css('left', '+= -190px');
    });
    prev.click(function() {
        oimg.css('left', '+= 190px');
    });
    setInterval(function() {
        if (index == 5) {
            index = 0;
            oimg.css('left', '0');
        } else {
            index++;
        }
        oimg.animate({
            'left': -190 * index
        }, 300);
    }, 4000);
});