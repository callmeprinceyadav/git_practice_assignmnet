let N = 13;
count = 0;

for(i=0; i<=N; i++){
    if (i%N==0){
        count += 1
    }
}
if (count > 2){
    console.log("It Is A Prime Number")
}
else{
    console.log("It Is Not A Prime Number")
}