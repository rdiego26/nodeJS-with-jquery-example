/**
 * Created by ramos on 29/12/14.
 */
var app = {

    login: function() {
        var _login = $('#login').val();
        var _password = $('#password').val();

        $('.loader-img').hide();

        if( _login == '' || _login == undefined ) {
            alert('Empty login!');
        } else if( _password == '' || _password == undefined ) {
            alert('Empty password!');
        } else {

            $('.loader-img').show('slow');
            $.ajax({
                type: "POST",
                url: 'http://localhost:5420/login',
                data: {login:_login,password:_password},
                success: function(res) {

                    if(res) {

                        if(res.data.length > 0) {
                            var _dados = res.data[0];
                            $.session.set('session',JSON.stringify(_dados));

                            setTimeout(function() {
                                $('.loader-img').hide();
                                alert('Login ok!');
                            }, 2000);


                        } else {
                            $('.loader-img').hide();
                            alert('Invalid login!');
                        }

                    } else {
                        $('.loader-img').hide();
                        alert('Invalid login!');
                    }

                },
                error: function(err) {
                    console.error(err);

                    $('.loader-img').hide();
                    alert('Error! Check the API!');

                }

            });

        }
    }

};
Object.seal(app);