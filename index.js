
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            var randomNumber2 = Math.floor(Math.random() * 6) + 1;


            var randomImage1 = "images/dice" + randomNumber1 + ".png";
            var randomImage2 = "images/dice" + randomNumber2 + ".png";

            document.querySelector(".img1").setAttribute("src", randomImage1);
            document.querySelector(".img2").setAttribute("src", randomImage2);

            var Message;
            if(randomNumber1>randomNumber2){
              Message = 'Player 1 wins!';
            }
            else if(randomNumber1<randomNumber2){
              Message = 'Player 2 Wins!';
            }
            else{
              Message = 'Draw!';
            }

            document.querySelector('h1').innerHTML = Message;
