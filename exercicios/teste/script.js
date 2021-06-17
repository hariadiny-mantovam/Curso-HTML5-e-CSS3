function calcular(){
    let txbase = window.document.getElementById('txbase');
    let base = (txbase.value);
    let txpot = window.document.getElementById('txpot');
    let pot = (txpot.value);
    let res = window.document.getElementById('res');

    if(base == 0 || pot == 0 ){
        window.alert('Digite algum número para calcular!');   
    } else{
        let resultado = base ** pot;
        res.innerHTML = `A potência de ${base} elevado a ${pot} é de ${resultado}!`
    }
}