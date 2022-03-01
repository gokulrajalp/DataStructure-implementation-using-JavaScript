const one = document.querySelector('.oneans');
const onebtn = document.querySelector('#one');
let i = 1;
onebtn.addEventListener('click',function(){

   const oneans = 
   `<div class="one" id="main" tabindex="0">
   <h5 >Sample 1</h5>
       <p> array1[] = [a,b,c,d,e] </p>
       <p> array2[] = [q,r,s,t,d] </p>
       <p>output: True</p>

       <h5>Sample 2</h5>
       <p> array1[] = [a,b,c,d,e] </p>
       <p> array2[] = [q,r,s,t,u] </p>
       <p>output: False</p>

       <h3>Run using inputs</h3>
       <p class"lead">Enter the array elements seperated by space<p>
       <div class="input-group mb-3"><span class="input-group-text" id="basic-addon1">Input 1</span><input class="onei1 onei" type="text" placeholder="Enter the first array elements"></div>
       <div class="input-group mb-3"><span class="input-group-text" id="basic-addon1">Input 2</span><input class="onei2 onei" type="text" placeholder="Enter the second array elements"></div>
       <h3 class="oneoutput" >Output : run to see the output</h3>
       <button class="btn btn-success onerun">RUN</button><br>
       <button class="btn btn-outline-info hide" id="hide1" >Hide this Question</button>
       
   </div>`;
    
   if(i===1){ 
       onebtn.insertAdjacentHTML("beforebegin",oneans);
        i++;
    }
  
   onebtn.classList.add('d-none');
   document.querySelector('#main').classList.remove('d-none');
   document.querySelector('#hide1').classList.remove('d-none');


   document.querySelector('#main').addEventListener("keyup", function(e){
        if (e.keyCode === 13) {
            document.querySelector('.onerun').click();
        }
    });
    
document.querySelector('.onerun').addEventListener('click',function(){
    if(document.querySelector('.onei1').value.length == 0){
        document.querySelector('.onei1').placeholder = "Enter input after run";
        document.querySelector('.onei1').classList.add('border-danger');
        return;
    }
    document.querySelector('.onei1').classList.remove('border-danger');
    if(document.querySelector('.onei2').value.length == 0){
        document.querySelector('.onei2').placeholder = "Enter input after run";
        document.querySelector('.onei2').classList.add('border-danger');
        return;
    }
    document.querySelector('.onei2').classList.remove('border-danger');
    let array1 = document.querySelector('.onei1').value.split(" ");
    let array2 = document.querySelector('.onei2').value.split(" ");
    let check = "False";
    array1.forEach(element1 => {
        array2.forEach(element2 => {
            if(element1 == element2){
                check = "True";
                return;
            }
        });
    });
    document.querySelector('.oneoutput').textContent=`Output : ${check}`;
    
})



const hide = document.querySelectorAll('.hide');
hide.forEach(element => {
    element.addEventListener("click", function(e){
        document.querySelector(`#${e.target.id}`).classList.add('d-none');
        document.querySelector(`#${e.target.id}`).parentElement.classList.add('d-none');
        onebtn.classList.remove('d-none');
    });
});
    



})



