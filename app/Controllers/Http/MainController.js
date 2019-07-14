'use strict'
const Comments= use('App/Models/Comment');

class MainController {
    async GetIndex({view}){
        const page=10;
        const comments = await Comments.query().select().orderBy('id','desc').fetch();
        console.log(comments.toJSON());
        return view.render('welcome',{comments: comments.toJSON()}); 
    }
    async RefreshComments({view}){
        const comments = await Comments.all();
        return view.render('refresh',{commnets:commnets.toJSON()});
    }    
    async SetComment({response, request}){
        const comment = new Comments();
        try {
            console.log(request);
            comment.name= request.input('name');
            comment.maleAvatar= request.input('gender')=='m';
            comment.comment= request.input('content');
            await comment.save();
        } catch (error) {
            console.log(error.message)
            return response.send(error);
        }
        return response.send('<div class="alert alert-success">Tu comentario a sido agregado exitosamente</div>');
    }
}

module.exports = MainController
