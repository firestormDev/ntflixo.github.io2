

/*Modal-Entrar*/
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);    
     modal.classList.add('mostrar');
     modal.addEventListener('click', function (e) {
        if (e.target.id == modalID || e.target.className == 'fechar' )
        modal.classList.remove('mostrar');            

});

}

 button = document.querySelector('button');
 button.addEventListener('click', function () {
     iniciaModal('modal-entrar');
 })


 /*Modal-Cadastrar*/
 

 function iniciaModal2(modal2ID){
     const modal2 = document.getElementById(modal2ID);
     /*console.log(modal2);*/
     modal2.classList.add('mostrar2');
     modal2.addEventListener('click', function (e) {
        if (e.target.id == modal2ID || e.target.className == 'fechar' )
        modal2.classList.remove('mostrar2');
        var nome = document. getElementById("nome").value;
        var job = document. getElementById("job").value;
           
 })}

 const cadastro = document.querySelector('.cadastro');
 cadastro.addEventListener('click', function(){
    iniciaModal2('modal-cadastrar');
 } )

 /*console.log(button2);/*


 /*Modal-login*/
 

 function iniciaModal3(modal3ID){
    const modal3 = document.getElementById(modal3ID);
    /*console.log(modal3);*/
    modal3.classList.add('mostrar3');
    modal3.addEventListener('click', function (e) {
       if (e.target.id == modal3ID || e.target.className == 'fechar' )
       modal3.classList.remove('mostrar3');   
})}

const login = document.querySelector('.login');
login.addEventListener('click', function(){
   iniciaModal3('modal-login');
} )

/*console.log(button3);*/


/*Modal busca*/

function iniciaModal4(modal4ID){
    const modal4 = document.getElementById(modal4ID);
    /*console.log(modal3);*/
    modal4.classList.add('mostrar4');
    modal4.addEventListener('click', function (e) {
       if (e.target.id == modal4ID || e.target.className == 'fechar' )
       modal4.classList.remove('mostrar4');   
})}

const busca = document.querySelector('.busca');
busca.addEventListener('click', function(){
   iniciaModal4('modal-busca');
} )


/*Api*/ 

axios.post('https://reqres.in/api/users', {
    name: 'nome',
    job: 'job'
  })
  .then(function (response) {      
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });




