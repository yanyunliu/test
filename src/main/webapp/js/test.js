$('input[type="file"]').on('change',doUpload);
function doUpload(){
    varfile=this.files[0];
    if(!/image\Aw+/.test(file.type)){
        alert("文件必须为图片！");
        return false;
    }
    var formData=new FormData($("#uploadForm")[0]);
    $.ajax({
        url:'',
        type:'POST',
        data:formData,
        dataType:'json',
        async:false,
        cache:false,
        contentType:false,
        processData:false,
        success:function(data) {
            console.log(data)
        },
        error:function(data)
    {
        console.log(data)
    }
});
}