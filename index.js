$('.question').on('click',(e)=>{
    let id = $(e.currentTarget).attr("id")[1];
    $('#q'+id).toggleClass('active-question');
    $('#a'+id).toggleClass('answer');
    $('#arrow'+id).toggleClass('arrow-direction');
    console.log(id);
})