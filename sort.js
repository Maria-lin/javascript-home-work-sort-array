      /***********************sort an array **********************/


   
 
      function sort_tab  (arr) {
        var min ;
       for (var j = 0; j < (arr.length) - 1; j++) {
           min = arr[j];
           for (var i = j + 1; i < arr.length; i++) {
       
               if (min > arr[i]) {
                   arr[j] = arr[i];
                   arr[i] = min;
                   min = arr[j];
       
               }
           }
       }
       return arr ; 
       };     
       console.log (' \n                    ***************** sort:************** ');  
   var  tab = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
   console.log (' \n \n le tableau avant le trie : \n ');
   console.table (tab); 
   sort_tab(tab);
   console.log(' \n \n le tableau aprés  le trie  : \n ');
   console.table (tab);
   