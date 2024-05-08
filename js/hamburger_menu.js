window.addEventListener("load", function() {
	//------btnHam漢堡按鈕被點按時
	document.getElementById("btnHam").onclick = function() {
		//取得選單的參考
		let menu = document.getElementById("menu");
		//---------------------------方法一, 檢測是否有hidden類, 再決定是要加入或移除
        // if(menu.classList.contains("hidden")) {
		// 	menu.classList.remove("hidden");
		// }else{
		// 	menu.classList.add("hidden");
		// }

		//---------------------------方法二, 有就移除，没有就加入
	    menu.classList.toggle("hidden");
		
		};	

}, false);