var fingers = ["thumb", "pointer finger", "middle finger", "ring finger", "pinkie"];
var whichKey = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
var start = false;
var cont = true;
var currentKey=0;
var currentFinger=0;

function randomString(){
  var finger = Math.floor((Math.random() * 5));
  if(finger >= 5){
    finger = 4;
  }

  var key = Math.floor((Math.random() * 26)) + 65;
  if(key >= 91){
    key = 90;
  }
  while(whichKey[key-65] != 0){
    key = Math.floor((Math.random() * 26)) + 65;
    if(key >= 91){
      key = 90;
    }
  }

  currentKey = key;
  currentFinger = finger+1;
  whichKey[key-65] = currentFinger;
  var string = "Place your " + fingers[finger] + " on " + String.fromCharCode(key);
  return string;

}

$(document).ready(function(){

  $(document).click(function(){
    if(!start && cont){
      start=true;
      var command = randomString();
      $("#text").text(command);
      $("#score").text("Score: 0");
    }

    if(!cont){
      $("#text").text("Click to begin!");
      cont = true;
    }

  });

  $(document).keypress(function(e){
    if(start){
      if(e.keyCode - 32 != currentKey){ //-32 because keypress does some weird thing
        if(whichKey[e.keyCode - 32 - 65]==0){
          $("#text").text("You lose!");
          start=false;
          cont=false;
          console.log("Wrong key");
        }
      }else{
        var currentScore = $("#score").html();
        currentScore = currentScore.substring(7, currentScore.length);
        currentScore = parseInt(currentScore);
        currentScore++;
        $("#score").text("Score: " + currentScore.toString());

        var command = randomString();
        $("#text").text(command);

      }

    }
  });

  $(document).keyup(function(e){
    if(start){
      if(whichKey[e.keyCode - 65] != currentFinger || currentKey == e.keyCode - 65){
        $("#text").text("You lose!");
        start=false;
        cont=false;
        console.log("Removed finger");
      }else{
        whichKey[e.keyCode - 65] = 0;
      }
    }
  });

});




jQuery('dokument').ready(function(){	

	
const button = document.querySelector('.button')
const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')

button.addEventListener('click', (e) => {
  button.classList.toggle('active')

  if (button.classList.contains('active')) {
    button.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-hidden', 'false')
    menuLinks.forEach(link => link.setAttribute('tabindex', '0'))
  } else {
    button.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
    menuLinks.forEach(link => link.setAttribute('tabindex', '-1'))
  }
})
	
	var a1,b1,c1;
	a1 = 1;
	a2 = 2;
	a3 = 3;
	
	jQuery('input').on('keyup', function(){			//НАЧАЛО

		
		var value1,value2,value3,value4;
		
			
		value1 = jQuery('#val1').val();				//ВВОД В СТРОКУ С КЛАВИАТУРЫ
		value2 = jQuery('#val2').val();
		value3 = jQuery('#val3').val();
		value5 = ('Число равно 600');
		value6 = ('Число не равно 600');
		value7 = 600;
		

		
		jQuery('#rezultat').html(value1);
		jQuery('#rezultat2').html(value2);
		jQuery('#rezultat3').html(value3);

		
		if (value1 == value7) {
			
		jQuery('#rezultat5').html(value5);		   
	} else {						    
		jQuery('#rezultat5').html(value6);			
	}
	
	
		if (value1 == value7) {
			
		jQuery('#lol').html(value5);		   
	} else {						    
		jQuery('#lol').html(value6);			
	}
	
	
	const value8 = Math.random();
	jQuery('#rndom').html(value8);
	

		
	});



});



	




















/*jQuery('document').ready(function(){
														
	jQuery('document').ready(function(){                        //ПОСТРОИТЬ ГОРОД? ДА ДОБАВИТЬ КАНАЛИЗАЦИЮ? ДА ДОБАВИТЬ ДОРОГИ НЕТ? КАМЕННЫЕ ДОРОГИ? НЕТ
	
	var test1;

	test1 = confirm('Удалить всё со страницы?');

														//ДОБАВИТЬ? ДА/НЕТ
																//КАКАЯ ТО ФУНКЦИ\ ДОБАВИТЬ
});
	
});	
	
*/	
	
	
	
	
	
	
	
	
	
	/*
	//КОДОВЫЕ ЗАМКИ ВЗЛОМ НА СКОРОСТЬ
	jQuery('document').ready(function(){
	
	var test1;
	//test1 = confirm('Удалить всё со страницы?');
	
	var a1 = 53;                       //РАНДОМНО ПОДБИРАЕТСЯ ПЕРЕМЕННАЯ     //ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ ПОЛЬЗОВАТЕЛЯ	
	if (a1 <= 600) {				   //ВТОРАЯ ПЕЕРМЕННАЯ ВВОДИТСЯ ПОЛЬЗОВАТЕЛЕМ  //ТАЙМЕР СТАРТУЕТ
		alert('Меньше 600!');		   //ЕСЛИ ПЕРЕМЕННАЯ ВВЕДЕННАЯ ПОЛЬЗОВАТЕЛЕМ РАВНА РАНДОМНО ПОДОБРАННОЙ ПЕРЕМЕННОЙ ТО УСПЕХ
	} else {						    //ВРЕМЯ ОСТАНАВЛИВАЕТСЯ
		alert('Больше 600!');			//В ПЛАНАХ ДОБАВИТЬ НЕСКОЛЬКО ЧАСОВ
	}
	
});
	*/
	
	
	
	
	
	
	/*

jQuery('document').ready(function(){
	
	var test1;
	//test1 = confirm('Удалить всё со страницы?');
	var pogoda = 'дождь';
	var time = 'ночь';
	
	if ((pogoda == 'солнечно' || pogoda == 'облачно')&& time =='день'){
		alert('Можно ехать на пикник :)');
	} else if (pogoda == 'дождь' && time == 'день'){
		alert('Ехать можно, но нужно взять зонты');
	}
	else {
		if (time == 'день'){
			alert('На пикник ехать нельзя :( ' + pogoda + '. \n Какой там пикик(' );
		} else{
			
			var message = 'Какой там пикник,сейчас же ночь!';
			if (pogoda == 'дождь'){
				message = message + '\n К тому же льёт дождь, ты Петя?';
			}
			alert(message);

		}
		
	}
	
	
});
	
*/	
	
	
	
	
	
	
	
	
	
	
	//--------------------------------
	
		/*jQuery('input').on('keyup', function(){
			
		// ТВИСТЕР ДЛЯ ПАЛЬЦЕВ КЕЙ АП КЕЙ ДОУВН 
		
		var value1,value2,value3,value4;
		value1 = jQuery('#val1').val();
		value2 = jQuery('#val2').val();
		
		value1 = parseInt(value1)*parseInt(value1);
		value2 = parseInt(value2)*parseInt(value2);
		
		value3 = value1 + value2;
		
		value4 = Math.sqrt(value3);
		
		//alert(value3 + '\n' + Math.round(value4));
		
		jQuery('#rezultat').html(value3);
		
		});
		
		
	*/
	
	//--------------------------------------------
	
	
	
	/*
		var test1;

	test1 = prompt('Введите ваше имя?',"");
	
	jQuery('#rezultat').html(test1);
	
	*/
	
	//---------------------------------------------
	
	
	/*jQuery('body').append('<a href="https://github.com">Перейти в гитхаб!</a>');
	
	jQuery('div').remove();
	
	var katet1, katet2;
	
	katet1 = 10;
	katet2 = 20;
	
	var katet1_sq, katet2_sq;
	katet1_sq = katet1 * katet1;
	katet2_sq = katet2 * katet2;
	
	var kvadr_gepa;
	kvadr_gepa = Math.sqrt(katet1_sq + katet2_sq);
	

	alert(kvadr_gepa);
	
	
	var p_clone
	p_clon = jQuery('p').clone();
	jQuery('body').append(p_clon);
	
		var p_clone
	p_clon = jQuery('p').clone();
	jQuery('body').append(p_clon);
	*/
