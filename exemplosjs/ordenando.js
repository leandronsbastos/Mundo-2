const swap =( arr = [], pos1 ,pos2 )=>{
    if( pos1 == pos2 ) return;
    const aux = arr[ pos1 ];
    arr[ pos1 ] = arr[ pos2] ;
    arr[ pos2 ] = aux;
}

const shuffle =( arr = [], quantidadeDeTrocas = 1 )=> {
    try{
        const buscaNumeroAleatorio = tamanhoArray  => Math.floor(Math.random() * tamanhoArray );
        
        const tamanhoArray = arr.length;
        if( tamanhoArray < 2 ) return arr;
    
        for( let x = 0; x < quantidadeDeTrocas;x++ ) {
            let indexAleatorio1 =  buscaNumeroAleatorio( tamanhoArray );
            let indexAleatorio2 =  buscaNumeroAleatorio( tamanhoArray );
            
            while( indexAleatorio2 == indexAleatorio1 ) indexAleatorio2 = buscaNumeroAleatorio( tamanhoArray );
    
            swap( arr,indexAleatorio1,indexAleatorio2 );

        }

    }catch( e ){
        console.log( e )
    }
}

const verificaArraySomenteInteiro = arr =>{
    const existeElementoNaoInteiro = arr.some( elemento => !Number.isInteger( elemento )  );
    return existeElementoNaoInteiro ? false: true;
}

const bubble_sort =( arr=[] )=>{
    try{
        const iteracaoArray =( tamanhoArray, arr = [] )=>{
            if( !tamanhoArray ) return;

            let houveTroca = false;
            
            const penultimoElementoDoArray = tamanhoArray - 1;
            for( let x = 0; x< penultimoElementoDoArray; x++ ){
                if( arr[ x ] <= arr[ x+1 ] ) continue;
                swap( arr,x ,x+1);
                houveTroca = true;
            }
 
            if( !houveTroca ) return;

            tamanhoArray--;
            iteracaoArray( tamanhoArray, arr );
        }

        if( !verificaArraySomenteInteiro( arr ) ) throw "Erro! Array contem elemento não Inteiro!"

        let tamanhoArray = arr.length;

        iteracaoArray( tamanhoArray, arr );
        
    }catch( e ){
        console.log( e )
    }
}

const selection_sort =( arr = [] ) => {
    try{
        const iteracaoArray =( arr = [],numeroIteracao = 0 )=>{
            const tamanhoArray = arr.length;
            if( numeroIteracao >= tamanhoArray ) return;

            let indexElementoMinimo = numeroIteracao;

            for( let x = numeroIteracao; x< tamanhoArray; x++ ) if( arr[ x ] < arr[ indexElementoMinimo ] ) indexElementoMinimo = x;
            
            swap( arr,indexElementoMinimo ,numeroIteracao);

            numeroIteracao++;
            iteracaoArray( arr,numeroIteracao  );
        }

        if( !verificaArraySomenteInteiro( arr ) ) throw "Erro! Array contem elemento não Inteiro!"

        iteracaoArray( arr );

    }catch( e ){
        console.log( e )
    }
}

const particionamento = ( arr= [],posicaoInicial, posicaoFinal )=> {
    try{
        if( !verificaArraySomenteInteiro( arr ) ) throw "Erro! Array contem elemento não Inteiro!";

        const pivot = arr[ posicaoFinal ];
        let menorElemento = posicaoInicial ;

        for( let x = posicaoInicial; x < posicaoFinal ;x++ ) {
            if( arr[x] >= pivot ) continue;
            
            swap( arr,menorElemento,x);
            menorElemento++;
        }
        
        swap( arr,menorElemento , posicaoFinal);
     
        
        return menorElemento;

    }catch( e ){
        console.log( e )
    }
}

const quick_sort =( arr= [],posicaoInicial = 0, posicaoFinal = arr.length -1 ) => {
    if( posicaoInicial >= posicaoFinal ) return;

    let particao = particionamento( arr,posicaoInicial, posicaoFinal);

    quick_sort( arr,posicaoInicial,particao-1 );
    quick_sort( arr,particao+1,posicaoFinal );
}

const mostrarListaValores= arr => {
    const valores = document.getElementById("valores");

    valores.innerHTML = "";
    arr.map( elemento => {
        let li = document.createElement('li');
        li.innerText = elemento;
        valores.appendChild(li);
    });
}

const listaParaJSON=()=> {
    const valores = document.getElementById("valores");
    const arrValores = [];
    for (const child of valores.children) arrValores.push( parseInt( child.innerText ) );

    return arrValores;
}

const add =()=>{
    const valor = document.getElementById("valor");
    const valores = document.getElementById("valores");

    let li = document.createElement('li');
    // li.value = valor.value;
    li.innerText = valor.value;

    valores.appendChild(li);
}

const ordenar =()=>{
    const chamarFuncao=( arrValores, funcao )=> {
        const funcoes = {
            bubble_sort:arr=>bubble_sort( arr ),
            selection_sort:arr=>selection_sort( arr ),
            quick_sort:arr=>quick_sort(arr)
        }

        funcoes[ funcao ]( arrValores );  
    }

    const funcaoSelecionada = document.getElementById("selecao");

    const arrValores = listaParaJSON();

    const funcao = funcaoSelecionada[ funcaoSelecionada.selectedIndex ].value;
    
    chamarFuncao( arrValores, funcao );
    mostrarListaValores( arrValores );
}

const misturar =()=>{
    const arrValores = listaParaJSON();
    shuffle( arrValores );
    mostrarListaValores( arrValores );
}