# Quetzalcoatl - Bot de Discord para Rastrear Encomendas dos Correios

Quetzalcoatl é um bot de Discord projetado para facilitar o rastreamento de encomendas dos Correios diretamente do seu servidor Discord. Ele permite que os usuários insiram códigos de rastreamento e recebam atualizações sobre o status das suas encomendas em tempo real.

## Funcionalidades

- **Rastreamento de Encomendas**: Adicione e rastreie múltiplas encomendas.
- **Notificações em Tempo Real**: Receba notificações sempre que houver uma atualização no status da encomenda.
- **Gerenciamento de Encomendas**: Comandos para listar, remover e verificar o status de encomendas rastreadas.
- **Interface Amigável**: Comandos simples e intuitivos para fácil interação.

## Comandos

### `!track [código]`

Adiciona um código de rastreamento para ser monitorado pelo bot.

```powershell
!track AA123456789BR
```

### `!status [código]`

Verifica o status atual de uma encomenda rastreada.

```powershell
!status AA123456789BR
```

### `!list`

Lista todas as encomendas sendo rastreadas pelo bot.

```powershell
!list;
```

### `!remove [código]`

Remove um código de rastreamento da lista.

```powershell
!remove AA123456789BR
```

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
