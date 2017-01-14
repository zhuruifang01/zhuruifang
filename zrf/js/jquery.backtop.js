jQuery.extend({
	backTop: function(obj) {
		$(window).scroll(function() {
			var tops = $(window).scrollTop();
			if (tops >= 50) { //超出滚动条50px时，出现返回顶部标志
				$(obj).fadeIn()
			} else {
				$(obj).fadeOut()
			}
			$(obj).click(function() { //点击时返回顶部
				var newobj = {
					st: tops
				}
				$(newobj).animate({
					st: 0
				}, {
					duration: 600,
					step: function() {
						$(window).scrollTop(newobj.st)
					}
				})
			})
		})
	}

})