// Fonction permettant d'ouvrir une modale
document.getElementById("btnOpenModal").addEventListener("click", openModal);
function openModal(){
    $('#todoModal').modal('toggle');
}
function ajout(){
    $("#btnAddTodo").show();
    $("#btnUpdateTodo").hide();
    $("#btnDeleteTodo").hide();


    document.getElementById('titleTodo').value=" ";
    document.getElementById('categoryTodo').value=" ";
    document.getElementById('descriptionTodo').value=" ";
}

// Fonction permettant de créer un objet de la liste todo
function createTodo(){
    $('#todoModal').modal('toggle');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var enfant = document.createElement("tr");
            id = xhr.responseText;
            enfant.innerHTML = "<th>"+document.getElementById('id').value+"</th>";
            enfant.innerHTML = enfant.innerHTML +"<td>"+document.getElementById('title').value+"</td>";
            enfant.innerHTML = enfant.innerHTML +"<td>"+document.getElementById('category').value+"</td>";
            enfant.innerHTML = enfant.innerHTML +"<td>"+document.getElementById('description').value+"</td>";
            enfant.setAttribute('id', id);
            var parent = document.getElementById('todosList');
            parent.appendChild(enfant);
        }else{  
        }        
    }
    xhr.open('POST','./ajax/todo.add.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = 'title=' +document.getElementById('titleTodo').value;
    data = data +'&category=' +document.getElementById('categoryTodo').value;
    data = data +'&description=' +document.getElementById('descriptionTodo').value;
	xhr.send(data);
}

// Fonction permettant de voir un objet de la liste todo
function showTodo(id){
    $('#todoModal').modal('toggle');

    $("#btnAddTodo").hide();
    $("#btnUpdateTodo").show();
    $("#btnDeleteTodo").show();

    var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var response = xhr.responseText;
            var title = JSON.parse(response).title;
            var category = JSON.parse(response).category;
            var description = JSON.parse(response).description;

            var parent1 = document.getElementById("titleTodo");
            var parent2 = document.getElementById("categoryTodo");
            var parent3 = document.getElementById("descriptionTodo");

            parent1.value = title;
            parent2.value = category;
            parent3.value = description;
        }else{
        }
    }
    xhr.open('POST','./ajax/todo.show.php');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = 'id=' +id;
	xhr.send(data);
}    

// Fonction permettant de mettre a jour un objet de la liste todo
function updateTodo(id){
    $('#todoModal').modal('toggle');

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var enfant = document.createElement("tr");
            var parent = document.getElementById("todosList");
            enfant.innerHTML = "<td>"+document.getElementById('title').value+"</td>";
            enfant.innerHTML = enfant.innerHTML +"<td>"+document.getElementById('category').value+"</td>";
            enfant.innerHTML = enfant.innerHTML +"<td>"+document.getElementById('description').value+"</td>";
            parent.removeChild(document.getElementById(id));
            parent.insertBefore(enfant,parent.firstChild);
        }else{
        }
    }
	xhr.open('POST','./ajax/todo.update.php');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	var data = 'id=' +id;
    data = data +"&title="+ document.getElementById('titleTodo').value;
    data = data +'&category=' +document.getElementById('categoryTodo').value;
    data = data +'&description=' +document.getElementById('descriptionTodo').value;
	xhr.send(data);
}

// Fonction permettant de supprimer un objet de la liste todo
function deleteTodo(id){
    $('#todoModal').modal('toggle');

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var parent = document.getElementById('todosList');
			var enfant = document.getElementById('todo_'+id);
			parent.removeChild(enfant);
        }else{
        }
    }
    xhr.open('POST','./ajax/todo.delete.php');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = 'id=' +id;
	xhr.send(data);
}