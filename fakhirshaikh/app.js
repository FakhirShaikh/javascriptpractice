// var text1 = "Txt 1";
// var text1 = "Txt 2";
// var finaltxt = text1+text1
// // console.log(finaltxt)
// // alert("dsgfhg")
// console.warn("warning")
// console.error("error")
// console.clear()

// +=> string to numbner

// var num1 =+prompt("Enter Number",0)
// var num2 =+prompt("Enter Number",0)
// var res = num1 + num2
// var res = num1 - num2

// var a = prompt("Enter Number",0)
// num + num2
// console.log(res)

// var batting = prompt("Enter BATTER NAME")
// if(batting.toLowerCase()=="baber"){
//     console.log("pakka stump ho gya ")
// }
// else{
//     console.log("pata nhi kiya ho gya")
// }

// var team = prompt("Enter tEAM nAME")
// if(team.toLowerCase()=="afg"){
//     console.log("pak win")
// }
// else{
//     console.log(team +" is win")
// }

// var number = prompt("Enter Number")
// if(number%2==0){
//     console.log(number + "is Even")
// }
// else{
//     console.log(number + "is odd")
// }

// rain  => 80%
// final
// draw

// toos=>batting

// ind =>batting
// sri =>win

// sri=>batting
// ind=>win

// var rain_per = +prompt("Enter Rain Per")
// 
// if (rain_per >= 80) {
//     console.log("Match Draw")
// }
// else {
//     console.log("enter toss win team")
//     var toss_win = prompt("Enter Toss Win")
//     if (toss_win == "ind") {
//         console.log("win srilanka")
//     }
//     else if (toss_win == "sri") {
//         console.log("win ind")

//     }
//     else {
//         console.log(toss_win + "bhai ya team ha hei nhi")
//     }
// }

// 10/8/2023

// var team=["PAK","IND","AUS","NZ","ENG"]
// var ticket=prompt("enter your country name")
// if(team[0]==ticket.toLocaleLowerCase){
//     document.write("ap ko ticket nhi mily ga")
// }
// else if(team[1]==ticket.toLocaleLowerCase){
//     document.write("ap tu india ka hi ho")
// }
// else{
//     document.write("your ticket price is 200$ dollars")
// }



// Array
// var studentNames =[]
// var studentNames=Array()
// var stringArray=["ali"]
// var mixedArray =[1,true,"data"]

// var Education =["SSC","HSC","BSC","MSC","MPhill","BCOM"]
// document.write("<div style='border:1px solid blue;padding:10px'>")
// document.write("<h1>Qulification</h1> <br> <h3>")
// document.write("1)"+Education[0]+"<br>")
// document.write("2)"+Education[1]+"<br>")
// document.write("3)"+Education[2]+"<br>")
// document.write("4)"+Education[3]+"<br>")
// document.write("5)"+Education[4]+"<br>")
// document.write("6)"+Education[5]+"<br></h3>")



// var studentName=["virat","Rohit","kl Rahul"]
// var total=500
// var studentMark=[120,230,280]
// document.write("<div style='border:1px solid blue;padding:10px'>")
// document.write("<h2> Score Of "+studentName[0] + " is "+ studentMark[0]+ ".Percentage is : "+(studentMark[0]/total)*100 +" %<br/>")
// document.write("Score Of "+studentName[1] + " is "+ studentMark[1]+ ".Percentage is : "+(studentMark[1]/total)*100 +" %<br/>")
// document.write("Score Of "+studentName[2] + " is "+ studentMark[2]+ ".Percentage is : "+(studentMark[2]/total)*100 +" % </h2>")

// var colorname = ["red","blue","black"]
// document.write(colorname)

// var inpuser = prompt("Enter COLOR NAME FOR ADD IN beginning")

// if(inpuser.length!=0){
//     colorname.unshift(inpuser) //
//     document.write("<br/>"+colorname)
// }


// var enduser = prompt("Enter COLOR NAME FOR ADD IN end")

// if(enduser.length!=0){
//     colorname.push(enduser) //
//     document.write("<br/>"+colorname)
// }

// var firstdata = prompt("Enter COLOR NAME FOR ADD IN beginning")
// if(firstdata.length!=0){
//     colorname.unshift(firstdata) //
//     document.write("<br/>"+colorname)

// }

// var seconddata = prompt("Enter COLOR NAME FOR ADD IN beginning")
// if(seconddata.length!=0){
//     colorname.unshift(seconddata) //
//     document.write("<br/>"+colorname)

// }

// document.write("<br/>Delete First Data ")
// colorname.shift()
// document.write("<br/>"+colorname)


// document.write("<br/>Delete Last  Data ")
// colorname.pop()
// document.write("<br/>"+colorname)

// var index = +prompt("Enter Index Number For add data")
// var inputdata = prompt("Enter  data")
// colorname.splice(index,0,inputdata)
// document.write("<br/>"+colorname)

// var index = +prompt("Enter Index Number For add data")
// if(index < colorname.length){
//     var deletecount = prompt("Enter  Delete Count")
//     colorname.splice(index,deletecount)
//     document.write("<br/>"+colorname)
// }
// else{
//     alert("plz enter correct index")
// }


// var studentArray=[230,340,420,320.490]
// studentArray.sort() this is not working properly
// document.write(studentArray)

// var city=["Karachi","Hyderabad","Islamabad","Quetta","Lahore"]
// document.write("<div style='border:1px solid blue;padding:10px'>")
// document.write("<h2> city list :</h2> <br>")
// document.write( "<h3>"+city+"</h3> <br>")
// selectedCities=city.slice(1,4)
// document.write( "<h3>"+selectedCities+"</h3>")

// var arr=["This ","is ","my "," cat"]
// document.write("string Array <br/>")
// var stringArray=arr.join("")
// document.write(stringArray)

// document.write("<br/>Array<br/>")
// document.write(arr)

// var team=["Pakistan","India","New Zealand","Australia","South Africa","Sirilanka","Afghanistan","Bangladesh","ned"]
// document.write(`
// <select>
// <option>${team[0]} </option>
// <option>${team[1]} </option>
// <option>${team[2]} </option>
// <option>${team[3]} </option>
// <option>${team[4]} </option>
// <option>${team[5]} </option>
// <option>${team[6]} </option>
// <option>${team[7]} </option>
// <option>${team[8]} </option>
// </select>
// `)