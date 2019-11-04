$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index') > -1){

        $('.gallery').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }

    //Posts

    if(window.location.href.indexOf('index') > -1){ 
        var posts = [
            {
                title: "Title test 1" , 
                date: 'Published on' + ' ' +  moment().format("MMM Do YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Title test 2" , 
                date: 'Published on' + ' ' +  moment().format("MMM Do YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Title test 3" , 
                date: 'Published on' + ' ' +  moment().format("MMM Do YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Title test 4" , 
                date: 'Published on' + ' ' +  moment().format("MMM Do YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },

            {
                title: "Title test 5" , 
                date: 'Published on' + ' ' +  moment().format("MMM Do YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },

        ];

        
        posts.forEach((item, index) => {
            var post =  `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Read more</a>
                </article>
            `;

            $("#posts").append(post);
        })

    }

    // Theme selector
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    })
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    })
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    })

    // Scroll up 

    $(".up").click(function(){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false; 
    })

    // Fake log in

    $("#login form").submit(function(){
        var form_name = $("#form_name").val()

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name")
       
    if(form_name != null && form_name != "undefined"){
        var about_paragraph = $("#about p")
        about_paragraph.html("<br><strong>Welcome, " +form_name+"</strong>");
        about_paragraph.append("<a href='#' id='logout'>Log out</a>");

        $("#login").hide()

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    } 

    //Accordion

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    //Clock
    if(window.location.href.indexOf('clock') > -1){
        setInterval(function(){
            var clock= moment().format("h:mm:ss");
            $("#clock").html(clock);
        },1000);
    }

    // Validation
    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'en',
        });
    }

    });
