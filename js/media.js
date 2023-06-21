function calcularpromedio(lista){
   let sumalista = 0;
   for(let i = 0; i < lista.length; i++){
     sumalista =  sumalista + lista[i]
   }
   const promedio = sumalista / lista
   console.log(promedio);
   return promedio;
};
