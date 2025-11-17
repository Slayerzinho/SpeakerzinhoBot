import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Coins, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Coins,
      title: 'Sistema de Economia',
      description: 'Ganhe coins, compre itens e gerencie seu inventário virtual',
    },
    {
      icon: Bot,
      title: 'RPG Completo',
      description: 'Batalhas épicas, aventuras e dungeons com sistema de progressão',
    },
    {
      icon: Zap,
      title: 'Comandos Rápidos',
      description: 'Interface intuitiva com mais de 25 comandos otimizados',
    },
    {
      icon: Shield,
      title: 'Seguro & Confiável',
      description: 'Sistema anti-exploits e proteção contra uso indevido',
    },
    {
      icon: Users,
      title: 'Social',
      description: 'Rankings, casamentos, interações e muito mais',
    },
  ];

  const stats = [
    { value: '25+', label: 'Comandos' },
    { value: '4', label: 'Categorias' },
    { value: '24/7', label: 'Online' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex-1">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Bem-vindo ao <span className="text-gradient">Speaker</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              O bot de Discord completo com economia, RPG, utilidades e recursos sociais 
              para transformar seu servidor
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 h-14 glow-red group"
              asChild
            >
              <a 
                href="https://discord.com/oauth2/authorize?client_id=1214069584626450462&scope=bot%20applications.commands&permissions=2146958847"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adicionar ao Discord
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 h-14"
              asChild
            >
              <Link to="/commands">
                Ver Comandos
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Recursos <span className="text-gradient">Poderosos</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tudo que você precisa para criar uma experiência incrível no seu servidor Discord
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover:border-primary/50 transition-all hover:shadow-glow-sm">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-8 pb-8 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto para começar?
              </h2>
              <p className="text-lg text-muted-foreground">
                Adicione o Speaker ao seu servidor agora e comece a usar todos os recursos gratuitamente
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 h-14 glow-red"
                asChild
              >
                <a 
                  href="https://discord.com/oauth2/authorize?client_id=1214069584626450462&scope=bot%20applications.commands&permissions=2146958847"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adicionar ao Discord
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
