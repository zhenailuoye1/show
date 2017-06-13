$(document).ready(function (){
    //todo面板
    $("#add-todo").click(function () {
        var title = $("#todo-title").val();
        var content = $("#todo-content").val();
        var todo = ''+
        '<div class="panel panel-default">'+
            '<div class="panel-heading">'+
                '<h3 class="panel-title">'+
                    title+
                '</h3>'+
            '</div>'+
            '<div class="panel-body">'+ 
                content+
            '</div>'+
        '</div>'
        if (!title) {
            alert("标题不能为空!");
        } else if (!content) {   
            alert("内容不能为空！");
        } else {
            $("#undo").prepend(todo);
            $("#todo-title").val('');
            $("#todo-content").val('');
        }
    })

    $("#add-todo").css("height",$("#todo-content").css("height"))
	
	$(".come_soon").click(function () {
        alert("本板块尚未开放");
    })
	
}) 
