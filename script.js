const fileInput=document.querySelector("input");
downloadBtn=document.querySelector("button");
downloadBtn.addEventListener("click",e =>{ 
  e.preventDefault();
  downloadBtn.innerText="Downloading file...";
 fetchFile(fileInput.value);
});

function fetchFile(url){
  // fetching file and returning response as blob
  fetch(url).then(res=>res.blob()).then(file=>{
    // url.createobjURL creates a url of passed object 
    let tempUrl=URL.createObjectURL(file);
    let aTag=document.createElement("a")
    aTag.href=tempUrl;
    aTag.download=url.replace(/^.*[\\\/]/, '');
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
    URL.revokeObjectURL(tempUrl);
    downloadBtn.innerText="Download file...";
  }).catch(()=>{
    downloadBtn.innerText="Download file...";
    alert("failed to download file!")
  })
}