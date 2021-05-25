player1_name=localStorage.getItem("Player1");
player2_name=localStorage.getItem("Player2");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("question_turn").innerHTML="Question Turn : "+player1_name;
document.getElementById("answer_turn").innerHTML="Answer Turn : "+player2_name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    realAnswer=parseInt(number1)*parseInt(number2);
    question="<h4>"+number1+" X "+number2+"</h4>";
    inputbox="<br>Answer : <input type='text' id='inputbox'>";
    checkbutton="<br><br><button class='btn btn-banana' onclick='check();'>Check</button>";
    row=question+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
question_turn="Player1";
answer_turn="Player2";
function check(){
    get_answer=document.getElementById("inputbox").value;
    if(get_answer==realAnswer){
        if(answer_turn=="Player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
            question_turn="Player1";
            answer_turn="Player2";
            document.getElementById("question_turn").innerHTML="Question Turn : "+player1_name;
            document.getElementById("answer_turn").innerHTML="Answer Turn : "+player2_name;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
            question_turn="Player2";
            answer_turn="Player1";
            document.getElementById("question_turn").innerHTML="Question Turn : "+player2_name;
            document.getElementById("answer_turn").innerHTML="Answer Turn : "+player1_name;
        }
    }
    else{
        if(answer_turn=="Player1"){
            question_turn="Player1";
            answer_turn="Player2";
            document.getElementById("question_turn").innerHTML="Question Turn : "+player1_name;
            document.getElementById("answer_turn").innerHTML="Answer Turn : "+player2_name;
        }
        else{
            question_turn="Player2";
            answer_turn="Player1";
            document.getElementById("question_turn").innerHTML="Question Turn : "+player2_name;
            document.getElementById("answer_turn").innerHTML="Answer Turn : "+player1_name;
        } 
    }
    document.getElementById("output").innerHTML="";
}