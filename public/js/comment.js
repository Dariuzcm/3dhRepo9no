$(document).ready(function () {
    $('#btn-comment-save').click(function () { 
        const data= $('#comment-form').serialize();
        $.ajax({
            type: "post",
            url: "/comment",
            data: data,
            beforeSend:()=>{
                $('modal-status').html('<div class="spinner-grow" role="status"><span class="sr-only">Cargando...</span></div>');
            },
            success: function (response) {
                $('#status').html(response);   
                closeModal();
               window.location.reload('/#comentarios');
            },
            error:()=>{
                $('modal-status').html('<div class="alert alert-danger">Algo salio mal al tratar de conectarce con el servido</div>');  
            }
        });
        return false;
    });
   
});
 function closeModal() {
    $('#CommentModal').modal('hide');
 }