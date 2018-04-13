(function($) {
    $.fn.extend({
        myLoading: function(config) {
            var defaults = {
                msg: '数据加载中,请稍后',
                mask:true,
                img:true,
                callback:function(){
                    alert(1)
                }
            };

            var config = $.extend(defaults, config);
        
            this.init = function() {
                this.destroy(false);
                var loadDiv = $("<div class='loadDiv'>" + config.msg + "</div>");
                this.css("position", "relative");
                this.append(loadDiv);

                if(config.mask){                   
                    var mask = $("<div class='mask'></div>");
                    this.append(mask);
                }

                if(config.img){                   
                    var img = $("<div class='loader-inner line-scale'>"+
                                     "<div></div>"+
                                     "<div></div>"+
                                     "<div></div>"+
                                     "<div></div>"+
                                     "<div></div>"+
                              "</div>");
                    this.find('.loadDiv').append(img);
                }
                else{
                    var img = $("<div class='loadingGif'><img src='../img/loading2.gif' width='80' /></div>");
                    this.find('.loadDiv').append(img);
                }
                              
            }          


            this.destroy = function(flag) {
                if(flag)
                {
                     config.callback()
                }               
                $(this).children('.loadDiv').hide();
                $(this).children(".mask").hide()
            }
            return this;
        }
    });
})(window.jQuery);
