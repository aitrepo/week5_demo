document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    // console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');


    $("#login_btn").click(function () {

        const userName = $('#userName').val()
        const password = $('#password').val()

        if (localStorage.getItem(userName) != undefined && localStorage.getItem(userName) == password) {


            // landing page

            // load remote data

           callAPI()

 
            window.location.href = "index.html#bookList"


        } else {
            alert("Invalid username or password!")
        }


    });

    $("#signup_btn").click(function () {
        window.location.href = "index.html#signup"
    });


    $("#register_btn").click(function () {

        const userName = $('#newUserName').val()
        const password = $('#newPassword').val()

        localStorage.setItem(userName, password)

        alert("Welcome " + userName)

        window.location.href = "index.html#login"

    });
}


function callAPI() {

    $.get("http://localhost:3000/booklist", function (resposeFromServer) {
        console.log("success" + resposeFromServer)

        // poulate the list of books

        let books = []
        
        if(resposeFromServer!=undefined &&  resposeFromServer.data!=undefined){


            const books = resposeFromServer.data

            const categories = Object.keys(books)

            for(category of categories){
                console.log(category)
                console.log(books[category])

                const book = books[category]

                book.forEach(bookData =>{

                    $('#book_list').append(
                        `<li><a href="#"><img style="width:25%" src="./img/default.jpg"><h2>${bookData.title}</h2><p>${bookData.text}</p></a></li></ul>`)

                })
                
               
            }


        }




        
    })
      


}





