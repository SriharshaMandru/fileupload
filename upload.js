document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();
    
    const userFile=document.getElementById('file').files[0];
    
    const formData=new FormData();
    formData.append('user-file',userFile,'user-file.jpg');

    fetch('http://httpbin.org/post',{
        method:"POST",
        body: formData,
    })
    .then(res=> res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
})