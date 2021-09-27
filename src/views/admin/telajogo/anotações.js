select * from table order by random() limit 1000;








const questoes=await Questao.findOne(
    { 
        
        order: Sequelize.literal('rand()'),
        limit: 1,
        include: [
            {
                model: Tema,
                as: 'tema',
                include: [
                    { model: Categoria, 
                    as: 'categoria' },
                ]
            }
        ]
    }

)


<div class="img-numero1-linha2">
            <img src="/admin/assets/num1.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero2-linha2">
            <img src="/admin/assets/num2.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero3-linha2">
            <img src="/admin/assets/num3.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero4-linha2">
            <img src="/admin/assets/num4.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero5-linha2">
            <img src="/admin/assets/num5.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>

        <div class="nomejogador2">
            <label class="TextoNomeJog2">Nome do Jogador 2</label>
        </div>

        <div class="img-botaojogador2">
            <img src="/admin/assets/botaojogador.png" width="80" height="80" alt="Testando" class="img-jogador2">
        </div>

        
        <div class="img-numero1-linha3">
            <img src="/admin/assets/num1.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero2-linha3">
            <img src="/admin/assets/num2.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero3-linha3">
            <img src="/admin/assets/num3.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero4-linha3">
            <img src="/admin/assets/num4.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero5-linha3">
            <img src="/admin/assets/num5.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>

        <div class="nomejogador3">
            <label class="TextoNomeJog3">Nome do Jogador 3</label>
        </div>

        <div class="img-botaojogador3">
            <img src="/admin/assets/botaojogador.png" width="80" height="80" alt="Testando" class="img-jogador3">
        </div>
        
        <div class="img-numero1-linha4">
            <img src="/admin/assets/num1.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero2-linha4">
            <img src="/admin/assets/num2.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero3-linha4">
            <img src="/admin/assets/num3.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero4-linha4">
            <img src="/admin/assets/num4.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>
        <div class="img-numero5-linha4">
            <img src="/admin/assets/num5.png" width="80" height="80" alt="Testando" class="img-fundo-imagem">
        </div>

        <div class="nomejogador4">
            <label class="TextoNomeJog4">Nome do Jogador 4</label>
        </div>

        <div class="img-botaojogador4">
            <img src="/admin/assets/botaojogador.png" width="80" height="80" alt="Testando" class="img-jogador4">
        </div>