var duzenleButon = document.getElementById("duzenleButon");
	var temizleButon= document.getElementById("temizleButon");
	
	duzenleButon.addEventListener('click', toggleIcerikDuzenle, false);
	temizleButon.addEventListener('click', icerikTemizle, false);
	
	document.addEventListener("DOMContentLoaded", icerikYenile, false);
	
	function icerikKaydet() {
	
	    var todoList = document.getElementById("todoList").innerHTML;
	    localStorage["kayitListe"] = todoList;
	}
	
	function icerikYenile() {
	    var kayitListe = localStorage["kayitListe"];
	    if (kayitListe != undefined) {
            document.getElementById("todoList").innerHTML = kayitListe;
	    }
	}
	
	function toggleIcerikDuzenle(e) {
	
	    var todoList = document.getElementById("todoList");
	
	    if (todoList.contentEditable == "false") {
	        todoList.setAttribute("contentEditable", true);
	
	        duzenleButon.value = "Kaydet";
	        
	        todoList.focus();
	
	    } else {
	        todoList.setAttribute("contentEditable", false);
	
	        duzenleButon.value = "Düzenle";
	        icerikKaydet();
	    }
	}
	
	function icerikTemizle(e) {
	
		localStorage.clear();
		
		window.location.reload();
	}
