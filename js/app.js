
 var form = document.getElementById('boxtext2');
 var textarea = document.getElementById('textarea');
 var btn = document.getElementById('btn');
 var container = document.getElementById('boxtext3')
 var message = document.getElementById('textarea');
 var counter = document.getElementById(`counter`);
 var fecha = new Date();
 var time= fecha.getHours() + " : " +fecha.getMinutes();
 var hour = document.getElementById('time');
 var tweet=document.getElementById('tweet');
 

window.addEventListener ('load', function(){
    
    btn.addEventListener('click', function() {
        /*var newDiv = document.createElement('div');//creando div*/
        var text = textarea.value;//ingresando valor de text area
        tweet.innerHTML=text;
        hour.innerHTML=time;
        container.insertBefore(tweet, containerchildNodes[0]);
        container.insertBefore(hour, containerchildNodes[1]);

    
    });

    textarea.addEventListener ('keyup',function() {
        if (textarea.length == 0) {
            btn.disabled = true;
        }
         else {
            btn.disabled = false;
        };
    
    });

    

    textarea.addEventListener ('keyup',function() {
        console.log(message);
        var textCount = message.value.length;
            counter.innerHTML = ((140-(textCount)));
            
        
        if (textCount> 120) {
            document.getElementById('counter').style.color = 'blue';
        };
        if (textCount > 130) {
            document.getElementById('counter').style.color = 'red';
        };
        if (textCount > 140) {
            document.getElementById('counter').style.color = 'red';
            btn.disabled = true;
        };
        
      

    });




     

});