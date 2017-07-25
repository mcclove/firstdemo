/*
 * @Author: fangtian
 * @Date:   2017-06-05 13:57:10
 * @Last Modified by:   fangtian
 * @Last Modified time: 2017-07-21 09:43:38
 */


var Page = function(config) {
    this.maxpage = config.maxpage || 1;
    this.containbox = $(config.containbox);
    this.dataclass = config.dataclass || ".item";
    this.pagebox = $(config.pagebox);
    this.linum = $(this.dataclass, this.containbox).length;
    this.init.apply(this, arguments);
}

Page.prototype = {
    init: function() {
   
        // this.pagebox.html("");
        var totalpage = this.linum;
        //向上舍入，比如有8条数据，8除6是1点几，Math.ceil的作用是让它变成2  
        // totalpage = Math.ceil(totalpage);
        //如果只有一题，那么没必要有这个分页的内容  
        // if (totalpage <= 1) {
        //     return;
        // }
        this.current = 1; //存储当前页  
        this.totalpage = totalpage; //存储总页数  
        // var str = "";
        // for (var i = 0; i < this.totalpage; i++) {
        //     var c = "";
        //     if (i == 0) {
        //         c = " current";
        //     }
        //     str += '<a href="javascript:;" class="pagenum' + c + '">' + (i + 1) + '</a>';
        // }
        // str = '<a class="prebtn" href="javascript:;"><< 上一题</a>' + str + '<a class="nextbtn" href="javascript:;">下一题 >></a>';
        // this.pagebox.html(str);
        // this.pagenums = $(".pagenum", this.containbox);
        var _this = this;
        this.goPage(1);
        // 点击数字跳转相应题目
        // this.pagenums.each(function(i, npage) {
        //     $(npage).click(function() {
        //         _this.goPage(this.innerHTML);
        //     });
        // })
        // 上一题
        $(".prebtn").click(function() {
            _this.goPrev(_this.current);
        });
        // 下一题
        $(".next").click(function() {
            _this.goNext(_this.current);
        });
    },
    goPage: function(num) {
        this.current = num;
        // this.pagenums.removeClass("current");
        // this.pagenums.eq(num - 1).addClass("current");
        var dataobjs = $(this.dataclass, this.containbox);
        dataobjs.each(function(i, itemdata) {
            $(itemdata).css("display", "none");
        });
        for (var i = (num - 1) * this.maxpage; i < num * this.maxpage; i++) {
            if (i < this.linum) {
                dataobjs.eq(i).css("display", "block");
            }
        }
    },
    goPrev: function(num) {
        if (num == 1) {
            alert('已经是第一题');
            
        }
        this.current--;
        this.goPage(this.current);
    },
    goNext: function(num) {
       
        if (num === this.totalpage) {
            // 回到第一题
            //alert('已经是最后一题');
            this.current=0;
        }
        this.current++;
        this.goPage(this.current);
    }
};

(function() {
    var page1 = new Page({
        containbox: "#list_content",
        maxpage: "1",
        dataclass: ".item",
        pagebox: ""
    });
})()
