"use strict"
var home = home || {} 

home = (()=>{
	const WHEN_ERR = '호출하는 mainHome js를 찾을 수 없습니다 .'
	const join = '/resources/js/home/join.js';
	let onCreate=()=>{

		$.when(
			import('/resources/js/home/join.js').then(()=>{
				
			})
		)
		.done(()=>{
			setContentView()
			gogojoin()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}

	let setContentView=()=>{
		$('body').html(homeVueVue.home_VueVue).append(homeVueVue.homeMain).append(homeVueVue.homeFooter);
		//$('body').html(homeVueVue.homeNavBar).append(homeVueVue.homeMain).append(homeVueVue.homeFooter);
		//$(homeVueVue.homeNavBar).append('body');
		//$(homeVueVue.homeFooter).appendTo('body');
		
	}

	let gogojoin=()=>{
		$('#gojoin').click(e=>{
			e.preventDefault()
			alert('asd')
			join.onCreate()
		})
	}
	return {onCreate}
})()

