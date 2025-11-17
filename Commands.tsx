import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { commands, categories, CommandCategory } from '@/data/commands';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Commands = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CommandCategory | 'Todos'>('Todos');

  const filteredCommands = useMemo(() => {
    return commands.filter((cmd) => {
      const matchesSearch = cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.usage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cmd.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      
      const matchesCategory = selectedCategory === 'Todos' || cmd.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryColor = (category: CommandCategory) => {
    const colors = {
      'Economia': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      'RPG': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      'Utilidades': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      'Social': 'bg-pink-500/10 text-pink-500 border-pink-500/20',
    };
    return colors[category];
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Comandos do <span className="text-gradient">Speaker</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore todos os comandos disponíveis e descubra tudo que o Speaker pode fazer
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Pesquisar comandos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="Todos" className="w-full" onValueChange={(v) => setSelectedCategory(v as CommandCategory | 'Todos')}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 h-12">
              <TabsTrigger value="Todos">Todos</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              {/* Commands Grid */}
              <div className="grid gap-4 md:grid-cols-2">
                {filteredCommands.length === 0 ? (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-muted-foreground">
                      Nenhum comando encontrado. Tente outra pesquisa.
                    </p>
                  </div>
                ) : (
                  filteredCommands.map((cmd, index) => (
                    <Card key={index} className="hover:border-primary/50 transition-all hover:shadow-glow-sm">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-lg font-semibold">
                            {cmd.name}
                          </CardTitle>
                          <Badge variant="outline" className={getCategoryColor(cmd.category)}>
                            {cmd.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Como usar:</p>
                          <code className="block px-3 py-2 bg-muted rounded-md text-sm font-mono">
                            {cmd.usage}
                          </code>
                        </div>
                        {cmd.description && (
                          <p className="text-sm text-muted-foreground pt-1">
                            {cmd.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {categories.map((category) => {
              const count = commands.filter(cmd => cmd.category === category).length;
              return (
                <Card key={category} className="text-center">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-primary">{count}</p>
                    <p className="text-sm text-muted-foreground mt-1">{category}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commands;
