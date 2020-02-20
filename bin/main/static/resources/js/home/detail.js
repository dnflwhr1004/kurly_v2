var detail = detail || {}

login = (()=>{
	const WHEN_ERR = '호출하는 detail js를 찾을 수 없습니다 .'
	
	let onCreate=()=>{
		$.when(
			import('/resources/js/vue/detailVue.js').then(()=>{
			})
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}

	let setContentView=()=>{
		$('body').html(homeVueVue.homeMain).appendTo(detailVue.detailinfofo1)
	}

	return {onCreate}
})()