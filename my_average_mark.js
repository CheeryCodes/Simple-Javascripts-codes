function my_average_mark(grades){
   
    let total = 0;
    for(i = 0; i < grades.length; i++){
        total += grades[i].integer;
    }
    var avg = total/grades.length;
    return avg.toFixed(1);
}
