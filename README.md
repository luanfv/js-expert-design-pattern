# Design Partner
São boas práticas para programadores e programadoras resolverem problemas. Logo abaixo irei listar algumas nomenclaturas desse universo.

## Over engineering
Quando um projeto ou parte dele possui muita complexidade ao ponto que só uma pessoa consegue manter.

## DRY (Don't Repeat Yourself)
Não ter código duplicado. Caso precise utilizar a mesma lógica em lugares diferentes, é recomendado que crie uma função dinâmica. Assim, se precisar mudar algo, é apenas em um lugar.

## KISS (Keep It Simples Stupid)
Criar códigos simples, onde qualquer programador(a) consiga entender no que aquele código é responsável sem dificuldade.

## YAGNI (You Aren't Gonna Need It)
Não criar funcionalidades que não serão usadas "agora". É legal deixar o código maleável para funcionalidades futuras,mas não é necessário aplicá-las antes da hora.
Atenção ao escopo, prazo e prioridades.

## SOLID
### Single Responsibility
Cada módulo deve ter apenas uma responsabilidade.

### Open/Close
Os módulos devem ser abertos para extensões e fechados para modificações. Se for adicionar novas funcionalidades é recomendado criar um novo módulo estendendo o que já existe invés de modificar algo que já esta funcionando.Se Estiver trabalhando com POO, isso pode ser adicionar um novo método na classe sem mexer nos antigos.

### Liskov Substitution
As classes filhas podem herdar o comportamento da classe base e sobrescrever um método da classe base se necessário.

### Interface Segregation
Os clientes não devem ser forçados a depender de uma classe que eles não usam, se isso acontecer, talvez seja necessário dividir a classe.

### Dependency Inversion
As dependências das classes devem depender de abstrações e não implementações, isso significa que, não se deve saber os detalhes de implementações das dependências. O Padrão Facade faz isso.