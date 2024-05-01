const dadosReceitas = [
    {
        titulo:"Pão de Banana"
        ,imagem:"img/paodebanana.jpg"
        ,preparo:"Em uma tigela misture a banana amassada, o sal, a canela, o fermento, o açúcar, os ovos e o óleo. Acrescente a farinha aos poucos na tigela. Misture bem até que a massa fique lisa. Cubra a tigela com um pano. Deixe dobrar de volume. Transfira a massa para uma forma de pão de forma untada com óleo. Deixe a massa dobrar de tamanho novamente. Leve ao forno a 180º até ficar dourado por mais ou menos 40min. Retire e sirva com café fresquinho."
        ,ingredientes:["1 e ¼ de xícara (chá) de bananas amassadas","½ colher (chá) de sal","1 colher (chá) de canela","2 colheres (chá) de fermento biológico para pão","1 colher (sopa) de açúcar", "2 ovos","½ xícara (chá) de óleo", "3 xícaras (chá) de farinha de trigo"]
    },
    {
        titulo:"Pão de Alho"
        ,imagem:"img/paodealho.jpeg"
        ,preparo:"Em um recipiente misture a maionese, o alho, o orégano, o cheiro-verde, o sal e a pimenta e reserve. Faça cortes horizontais no pão francês de maneira a formar pequenas fatias (mais ou menos 4), mas sem desprendê-las umas das outras (como no pão de alho comprado). Passe a mistura reservada entre as fatias e depois envolvendo todo os pães. Polvilhe sobre os pães o parmesão ralado. Leve à churrasqueira e asse bem de ambos os lados."
        ,ingredientes:["6 pães franceses (médios)","2 colheres de sopa de alho picadinho","1/2 xícara de chá de cheiro-verde picado","sal a gosto","1 vidro pequeno de maionese","1 colher de sopa não muito cheia de orégano","1/2 xícara de chá de parmesão ralado","pimenta a gosto"]
    },
    {
        titulo:"Pão de Queijo"
        ,imagem:"img/paodequeijo.jpeg"
        ,preparo:"Primeiro, coloque o leite e o óleo em uma panela pra esquentar, desligue o fogo imediatamente assim que começar a ferver (você verá umas bolinhas do leite subindo). Em uma tigela grande, coloque o polvilho e o sal, e misture bem, logo em seguida, despeje o conteúdo da panela ainda quente, misture bem, primeiro com uma colher e depois com a mão. Em seguida coloque o queijo ralado e um pouco do queijo do prato e também 1 ovo, continue misturando bem. Coloque o resto do queijo e verifique se a massa esta com uma textura boa, nem muito oleosa e nem muito seca. Se você sentir que está muito seca, coloque outro ovo, se ela ficar oleosa, coloque mais um pouco de polvilho. Essa massa deverá soltar da tigela e também da sua mão. Experimente a massa e veja se esta boa de sal, algumas pessoas gostam de colocar um pouco mais de sal.Agora é só fazer bolinhas e colocar na assadeira, deixando um pequeno espaço entre um pão e o outro. Não é necessário untar a assadeira. Deixe no forno em temperatura média (230°) até dourar um pouco."
        ,ingredientes:["500 g de polvilho doce","250 ml de leite integral","1 colher/sopa rasa de sal","1 prato cheio (350 g) de queijo meia cura e/ou mussarela ralado no ralador (quanto mais queijo, mais gostoso o pão vai ficar)","1 ou 2 ovos","1/2 copo de óleo","1 pacote de queijo ralado parmesão"]
    }
];

const getListaIngredientes= receita => {
    let lista = "<ul>";
    receita.ingredientes.map( ingrediente =>{
        lista += `"${ ingrediente }"`
    });
    lista += "</ul>";

    return lista;
};

const getCard = receita => 
`<div class="card m-3" style="width:400px;">
    <img src="${ receita.imagem }" class="card-img-top" alt="" ></img>
    <div class="card-body text-start font-size-12">
        <p class="card-title"><strong>${ receita.titulo }</strong></p> 
        <div class="card-text">
            ${getListaIngredientes( receita )}
            <hr>
            <p>${ receita.preparo }</p>
        </div>
    </div>
</div>`;
    


const preencheCatalogo=()=> {
    const pnlCatalogo = document.getElementById( "pnlCatalogo" );   
    pnlCatalogo.innerHTML = dadosReceitas.map( receita => getCard( receita ) );    
};

preencheCatalogo( dadosReceitas );