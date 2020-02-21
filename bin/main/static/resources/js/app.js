"use strict"
var app = app || {};

app = (()=>{
	let init=()=>{
		
		import('/resources/js/vue/homeVue.js').then(()=>{

			$('body').html(homeVue.home_nav).append(homeVue.home_main).append(homeVue.home_footer);
			gogojoin(),gogologin(),details(),goodshop()
		}),
		import('/resources/js/vue/joinVue.js').then(()=>{
			
		}),
		import('/resources/js/vue/loginVue.js').then(()=>{
			search_info()
		}),
		import('/resources/js/vue/detailVue.js').then(()=>{

		}),
		import('/resources/js/vue/goodshopVue.js').then(()=>{

		}),
		import('/resources/js/vue/idsearchVue.js').then(()=>{
			
		}),
		import('/resources/js/vue/pwsearchVue.js').then(()=>{

		})
	}
	let run=()=>{
		init()
	}
	
	/* let homeevent=()=>{
		window.onscroll = function() {myFunction()};
		var navbar = document.getElementById("navbar");
		var sticky = navbar.offsetTop;

		function myFunction() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky");
		}
	}
} */

	let gogojoin=()=>{
		$('#gojoin').click(e=>{
			e.preventDefault()
			alert('gojoin')
			$('#body').empty()
			$('#body').html(joinVue.joininfofo)
		})
	}

	let gogologin=()=>{
		$('#gologin').click(e=>{
			e.preventDefault()
			alert('gologin')
			$('#body').empty()
			$('#body').html(loginVue.loginVuego)
			$.ajax({
				url:'/member/'+$('#userId').val(),
				type:'POST',
				data:JSON.stringify({userid : $('#userId').val(), passwd : $('#passwd').val()}),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
					let a = d.userid
					alert(JSON.stringify(a.userid+a.passwd))
				},
				error : e=> {
					alert('로그인 실패')
				}
			})
		})
	}

	let details=()=>{
		$('#detail1').click(e=>{
			e.preventDefault()
			$('#body').empty()
			$('#body').html(detailVue.detailinfofo1)
		}),

		$('#detail2').click(e=>{
			e.preventDefault()
			$('#body').empty()
			$('#body').html(detailVue.detailinfofo2)
		}),

		$('#detail3').click(e=>{
			e.preventDefault()
			$('#body').empty()
			$('#body').html(detailVue.detailinfofo3)
		}),
		$('#detail4').click(e=>{
			e.preventDefault()
			$('#body').empty()
			$('#body').html(detailVue.detailinfofo4)
		})
	}

	let goodshop=()=>{
		$('#good_shop').click(e=>{
			e.preventDefault()
			$('#body').html(goodshopVue.goodshopVue_body)
		})
	}

	let search_info=()=>{
		
	}


	return {run}
})()