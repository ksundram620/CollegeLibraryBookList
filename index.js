console.log('hii there');

// book constructor
function book(name,AName,Btype){
    this.name= name;
    this.AName=AName;
    this.Btype=Btype;
}


function display(){

}

display.prototype.add=function(book){
    console.log("add to ui");
    let tbody=document.getElementById('tbody');
    let String=`<tr>
          
               <td>${book.name}</td>
                <td>${book.AName}</td>
                <td>${book.Btype}</td>
  </tr>
    `
    tbody.innerHTML +=String;
}

// to clear form
display.prototype.clear=function(){
    let libraryForm=document.getElementById('libraryForm');
    libraryForm.reset();
}




//event listener for libraryForm
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',onsubmit);

function onsubmit(e){
    let name =document.getElementById('Bname').value;
    let author=document.getElementById('AName').value;
    let Classic1=document.getElementById('Classic');
    let Fiction1=document.getElementById('Fiction');
    let novel1=document.getElementById('novel');
    let type
    // console.log(Classic1.checked);
    // console.log(Fiction1.checked);
    // console.log(novel1.checked);
    if(Classic1.checked){
        type=Classic1.value;
    }
    else if(Fiction1.checked){
        type=Fiction1.value;
    }
    else if(novel1.checked){
        type=novel1.value;
    }
    let book1=new book(name,author,type);
    // console.log(book1);
    let display1= new display();
    display1.add(book1);
    display1.clear();
    e.preventDefault();
}
