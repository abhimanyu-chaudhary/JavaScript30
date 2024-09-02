document.addEventListener("DOMContentLoaded", function(){

    const dropbtn = document.querySelector('.dropbtn');
    const dropdowncontent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener("click", function(event){
        dropdowncontent.classList.toggle('show');
    });

    const subbtn = document.querySelector('.subbtn');
    const dropdowncontentsub = document.querySelector('.dropdown-content-sub');

    subbtn.addEventListener('click', function (event){
        dropdowncontentsub.classList.toggle('show');
    })

    document.addEventListener('click', function (event){
        if(!dropbtn.contains(event.target) && !dropdowncontent.contains(event.target)){
            dropdowncontent.classList.remove('show');
            dropdowncontentsub.classList.remove('show');
        }
    })


});