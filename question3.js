//You need to write a function countFileExtensions that takes an array of file names as input and returns an object. This object should count the number of files for each unique file extension.

const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "text1.txt",
    "photo1.jpg",
    "program1.exe",
    "data1.csv",
    "report1.pdf"
  ];
  
  function countFileExtensions(files){
    let obj = {};
    files.forEach((ele)=>{
      let extension =  ele.split('.').pop()

      if(obj[extension]===undefined){
         obj[extension] = 1
      }else{
        obj[extension] += 1
      }
    })
    return obj
  }

  console.log(countFileExtensions(files))