import { CheckCircle, XCircle } from 'lucide-react';
import { allowedGuidelines, forbiddenGuidelines } from '@/data/guidelines';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Guidelines = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Diretrizes de <span className="text-gradient">Uso</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leia atentamente as regras para usar o Speaker de forma adequada e manter uma experiência positiva para todos
            </p>
          </div>

          {/* Guidelines Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Allowed */}
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-500">
                  <CheckCircle className="h-6 w-6" />
                  <span>{allowedGuidelines.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {allowedGuidelines.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Forbidden */}
            <Card className="border-red-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-500">
                  <XCircle className="h-6 w-6" />
                  <span>{forbiddenGuidelines.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {forbiddenGuidelines.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Important Notice */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-sm text-center text-foreground">
                <strong className="text-primary">Importante:</strong> O não cumprimento destas diretrizes pode resultar em 
                restrições de uso do bot, incluindo banimentos temporários ou permanentes. 
                Mantenha a comunidade saudável e respeitosa.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
