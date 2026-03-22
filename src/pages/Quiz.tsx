import { useState } from "react";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCcw, Trophy, MessageSquare, ShieldAlert, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

const quizThemes = [
  {
    id: "identificacao",
    title: "Identificar Cyberbullying",
    description: "Será que sabes distinguir uma brincadeira de uma agressão digital?",
    icon: ShieldAlert,
    questions: [
      {
        question: "Recebes comentários repetidos e ofensivos numa foto tua por parte de um grupo da escola. Isto é:",
        options: [
          { text: "Apenas uma brincadeira de mau gosto", isCorrect: false },
          { text: "Cyberbullying e deve ser travado", isCorrect: true },
          { text: "Algo que deves ignorar para sempre", isCorrect: false },
          { text: "Culpa tua por teres publicado a foto", isCorrect: false }
        ],
        explanation: "Agressões repetidas e intencionais online, feitas por um indivíduo ou grupo, são consideradas cyberbullying."
      },
      {
        question: "Alguém cria um perfil falso para publicar mentiras sobre ti. O que deves fazer?",
        options: [
          { text: "Criar também um perfil falso para te vingares", isCorrect: false },
          { text: "Pedir aos teus amigos para insultarem esse perfil", isCorrect: false },
          { text: "Tirar prints e denunciar o perfil à plataforma e à PSP", isCorrect: true },
          { text: "Apagar as tuas redes sociais e não contar a ninguém", isCorrect: false }
        ],
        explanation: "Denunciar e guardar provas é a única forma eficaz de parar um perfil falso e identificar o autor."
      }
    ]
  },
  {
    id: "reacao",
    title: "Como Reagir",
    description: "Sabes o que fazer quando és alvo ou testemunha de assédio?",
    icon: MessageSquare,
    questions: [
      {
        question: "Vês um colega a ser insultado num grupo de WhatsApp. Qual a melhor atitude?",
        options: [
          { text: "Sair do grupo e fingir que não vi nada", isCorrect: false },
          { text: "Apoiar o colega em privado e denunciar a situação", isCorrect: true },
          { text: "Rir-me dos comentários para não ser o próximo alvo", isCorrect: false },
          { text: "Entrar na discussão para defender o colega com insultos", isCorrect: false }
        ],
        explanation: "Ser um espetador ativo significa apoiar a vítima e reportar o abuso sem escalar a violência."
      },
      {
        question: "Um agressor diz que se contares a alguém, vai publicar fotos tuas. Isto é:",
        options: [
          { text: "Uma promessa que ele vai cumprir se contares", isCorrect: false },
          { text: "Chantagem e deves pedir ajuda imediata à PSP", isCorrect: true },
          { text: "Algo normal na internet", isCorrect: false },
          { text: "Razão para fazeres o que ele manda", isCorrect: false }
        ],
        explanation: "Chantagem e extorsão são crimes graves. A PSP tem equipas especializadas para lidar com estas ameaças com segurança."
      }
    ]
  }
];

const Quiz = () => {
  const [selectedTheme, setSelectedTheme] = useState<typeof quizThemes[0] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered || !selectedTheme) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (selectedTheme.questions[currentQuestion].options[index].isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!selectedTheme) return;
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedTheme.questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setSelectedTheme(null);
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="grain min-h-screen bg-background">
      <Navbar />

      <main className="container pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {!selectedTheme ? (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="font-body text-[13px] font-medium uppercase tracking-[0.3em] text-primary">
                  Treino de Defesa Digital
                </p>
                <h1 className="font-display text-section">Escolhe o teu Quiz</h1>
                <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                  Testa os teus conhecimentos sobre cyberbullying e aprende a proteger-te e aos teus amigos.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {quizThemes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme)}
                    className="group flex flex-col items-start p-8 rounded-md border border-border bg-card transition-all hover:border-primary/50 hover:-translate-y-1 text-left"
                  >
                    <div className="h-12 w-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <theme.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-2xl mb-2 tracking-wide">{theme.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mb-6">{theme.description}</p>
                    <span className="mt-auto font-body text-xs font-semibold uppercase tracking-widest text-primary">Começar Quiz</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <button 
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Escolher outro tema
              </button>

              {showScore ? (
                <div className="rounded-md border border-border bg-card p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <Trophy className="h-16 w-16 text-primary" />
                  </div>
                  <h2 className="font-display text-4xl mb-4">Quiz Terminado!</h2>
                  <p className="font-body text-xl text-muted-foreground mb-8">
                    Acertaste em {score} de {selectedTheme.questions.length} perguntas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={resetQuiz}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02]"
                    >
                      <RefreshCcw className="h-4 w-4" />
                      Tentar outro quiz
                    </button>
                    <Link
                      to="/proteccao"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-8 py-3.5 font-body text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                    >
                      Ver guia completo
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm font-medium text-primary uppercase tracking-widest">
                      {selectedTheme.title} · {currentQuestion + 1}/{selectedTheme.questions.length}
                    </span>
                    <div className="h-2 w-32 bg-border rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-300" 
                        style={{ width: `${((currentQuestion + 1) / selectedTheme.questions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h2 className="font-display text-3xl leading-tight">
                    {selectedTheme.questions[currentQuestion].question}
                  </h2>

                  <div className="grid gap-4">
                    {selectedTheme.questions[currentQuestion].options.map((option, index) => {
                      let buttonClass = "flex items-center justify-between rounded-md border border-border bg-card p-6 text-left transition-all hover:border-primary/50";
                      
                      if (isAnswered) {
                        if (option.isCorrect) {
                          buttonClass = "flex items-center justify-between rounded-md border-2 border-green-500 bg-green-500/10 p-6 text-left transition-all";
                        } else if (selectedOption === index) {
                          buttonClass = "flex items-center justify-between rounded-md border-2 border-red-500 bg-red-500/10 p-6 text-left transition-all";
                        } else {
                          buttonClass = "flex items-center justify-between rounded-md border border-border bg-card p-6 text-left opacity-50";
                        }
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(index)}
                          disabled={isAnswered}
                          className={buttonClass}
                        >
                          <span className="font-body text-base">{option.text}</span>
                          {isAnswered && option.isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                          {isAnswered && !option.isCorrect && selectedOption === index && <XCircle className="h-5 w-5 text-red-500" />}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="rounded-md bg-primary/5 border border-primary/20 p-6 mb-8">
                        <p className="font-body text-sm text-foreground/90 leading-relaxed">
                          <strong className="block mb-2 text-primary uppercase tracking-wide">Explicação</strong>
                          {selectedTheme.questions[currentQuestion].explanation}
                        </p>
                      </div>
                      <button
                        onClick={handleNextQuestion}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-body text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02]"
                      >
                        {currentQuestion + 1 === selectedTheme.questions.length ? "Ver resultado final" : "Próxima pergunta"}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz;
