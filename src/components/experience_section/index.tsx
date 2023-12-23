export function SecondarySection() {
    return (
        <div className="mx-10 md:mx-28 min-w-screen min-h-screen flex flex-col-reverse md:flex-row">
            <div>

            </div>
            <div
                id="experiencia"
                className='flex flex-1 flex-col md:flex-row gap-20'
            >
                <div className="flex flex-1 flex-col gap-5">
                    <h1
                        className=' font-bold text-xl md:text-4xl   '
                    >
                        Minha <span className='animate-pulse bg-gradient-to-l from-[#096fd4] to-[#096fd4] text-transparent bg-clip-text'>Experiência</span></h1>
                    <h4 className="font-bold dark:text-zinc-300 mt-5 italic">"Não é a linguagem de programação que define o programador, mas sim sua lógica."<br /> - David Ribeiro Guilherme</h4>
                    <p className='text-base md:text-lg text-justify mt-7 dark:text-zinc-400'>
                        Atualmente, concentro-me no desenvolvimento utilizando Java para o back end e ReactJs para o front end. Essa escolha foi cuidadosamente avaliada com base nas tendências do mercado e nas crescentes demandas da indústria. Prefiro Java pela sua confiabilidade no desenvolvimento de sistemas robustos no back end, enquanto o ReactJs destaca-se pela abordagem declarativa e eficiência no desenvolvimento de interfaces interativas no front end. Apesar disso, minha jornada é marcada pela busca constante de desafios e pela disposição em aprender novas tecnologias. Estou pronto para abraçar linguagens, frameworks e ferramentas adicionais que aprimorem minha capacidade de entrega e inovação, reconhecendo a importância de uma mentalidade ágil e adaptável no dinâmico mundo da tecnologia.                        </p>
                </div>
                <div className="flex flex-1 flex-col gap-5 ">
                    <div className="dark:text-zinc-400 max-w-6xl border w-full rounded px-6 py-6 shadow-xl dark:shadow-zinc-900 border-zinc-300 dark:border-zinc-800 hover:border-blue-700 hover:dark:border-blue-700 transition-colors duration-1000">
                        <h1 className="dark:text-white text-base md:text-lg font-bold">Estagiário de T.I & Dedenvolvimento<br /><br /></h1>

                        Codepe Corretora S.A Jan/2023 - atual<br />
                        · Desenvolvimento e Manutenção de um Sistema de Crédito Wem " ReactJS<br />
                        · Desenvolvimento e Manutenção de um Portal de ±cesso para os módulos do sistema" HTML, CSS e Javascript<br />
                        · Manutenção de Backend/API com Java<br />
                        · Manutenção de Banco de Dados MySQL<br /><br />

                        · Participação em reuniões para acompanhamento do pro4eto e validações das necessidides do clientes<br />
                        · Suporte em rotinas de TZI, contábeis e financeiras
                    </div>
                    <div className="hover:border-blue-700 dark:text-zinc-400 hover:dark:border-blue-700 transition-colors duration-1000 max-w-6xl border w-full rounded px-6 py-6 shadow-xl dark:shadow-zinc-900 border-zinc-300 dark:border-zinc-800">
                        <h1 className="text-base md:text-lg font-bold dark:text-white">Monitor de Algoritmo de Lógica de Programação <br /><br /></h1>

                        Programa de Monitoria - Fatec Santana de Parnaíba Out/2022 - Dez/2023<br />
                        · Auxílio aos alunos em atividades e conteúdo de disciplina<br />
                        · C/C++<br />
                        · Suporte para o professor<br /><br />
                    </div>
                </div>

            </div>
        </div>
    )
}