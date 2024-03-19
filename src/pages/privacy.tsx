import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>SmartHome</title>
        <meta name="description" content="Smart home hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <h1>Política de Privacidade</h1>

<p>Esta Política de Privacidade descreve como o aplicativo o WhatsHome coleta, usa e compartilha informações quando você utiliza nosso serviço e quais são seus direitos em relação a essas informações. Ao utilizar nosso serviço, você concorda com a coleta e uso de informações de acordo com esta política.</p>

<h2>1. Informações Coletadas</h2>

<p>O aplicativo WhatsHome pode acessar e coletar informações relacionadas à Alexa do usuário, incluindo, mas não se limitando a:</p>
<ul>
  <li>Comandos de voz enviados à Alexa</li>
  <li>Informações sobre dispositivos associados à Alexa</li>
  <li>Interações com dispositivos conectados à Alexa</li>
  <li>Informações de configuração e preferências do usuário relacionadas à Alexa</li>
</ul>

<h2>2. Uso das Informações</h2>

<p>As informações coletadas pelo aplicativo WhatsHome podem ser utilizadas para:</p>
<ul>
  <li>Personalizar e melhorar a experiência do usuário</li>
  <li>Fornecer suporte técnico e responder a solicitações de assistência</li>
  <li>Desenvolver novos recursos e funcionalidades para o aplicativo</li>
  <li>Cumprir obrigações legais ou regulatórias aplicáveis</li>
</ul>

<h2>3. Compartilhamento de Informações</h2>

<p>O aplicativo WhatsHome pode compartilhar as informações coletadas nas seguintes circunstâncias:</p>
<ul>
  <li>Com fornecedores de serviços terceirizados que prestam serviços em nosso nome</li>
  <li>Quando exigido por lei ou para responder a processos judiciais válidos</li>
  <li>Em caso de fusão, aquisição ou venda de ativos, onde as informações do usuário possam ser transferidas como parte do negócio</li>
</ul>

<h2>4. Segurança das Informações</h2>

<p>O aplicativo WhatsHome adota medidas de segurança adequadas para proteger as informações contra acesso não autorizado, alteração, divulgação ou destruição não autorizada. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro e, portanto, não podemos garantir sua segurança absoluta.</p>

<h2>5. Seus Direitos e Escolhas</h2>

<ul>
  <li>Você pode optar por não compartilhar certas informações conosco, no entanto, isso pode afetar sua capacidade de usar determinados recursos do aplicativo.</li>
  <li>Você pode revisar, atualizar ou excluir as informações pessoais que nos forneceu entrando em contato conosco através dos meios disponibilizados neste aplicativo.</li>
  <li>Você pode optar por não receber comunicações de marketing enviando um e-mail para nós ou seguindo as instruções de cancelamento de inscrição incluídas em tais comunicações.</li>
</ul>

<h2>6. Crianças</h2>

<p>Este aplicativo não se destina a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco para que possamos remover essas informações de nossos sistemas.</p>

<h2>7. Alterações a esta Política de Privacidade</h2>

<p>Esta Política de Privacidade pode ser atualizada periodicamente para refletir alterações em nossas práticas de privacidade. Publicaremos uma nova versão da Política de Privacidade neste aplicativo e, se as alterações forem significativas, forneceremos um aviso mais proeminente ou obteremos seu consentimento, conforme exigido por lei.</p>

<h2>8. Contate-Nos</h2>

<p>Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade, entre em contato conosco pelo seguinte e-mail: [Seu endereço de e-mail de contato].</p>

<p>Esta Política de Privacidade foi atualizada pela última vez em [Data de Atualização].</p>

      </main>
    </>
  );
}
